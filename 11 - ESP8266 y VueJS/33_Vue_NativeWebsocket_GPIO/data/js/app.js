Vue.use(VueNativeSock.default, 'ws://' + location.hostname + '/ws', { format: 'json' })

Vue.component('gpio-input', {
  props: ['gpio'],
  template: `
            <li class="mdl-list__item">
                <span class="mdl-list__item-primary-content">{{gpio.text}}</span>
                <span class="mdl-list__item-secondary-action">
                    <label class="label-big" :class="{ \'On-style \': gpio.status, \'Off-style \': !gpio.status}"
                    :id="'input-label-' + gpio.id">{{ gpio.status ? "ON" : "OFF" }}</label>
                </span>
            </li> `
})

Vue.component('gpio-output', {
  props: ['gpio'],
  template: ` <li class="mdl-list__item">
                <span class="mdl-list__item-primary-content">{{gpio.text}}</span>
                <span class="mdl-list__item-secondary-action">
                    <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">
                        <input type="checkbox" class="mdl-switch__input" 
                        :id="'output-switch-' + gpio.id"
                        v-model="gpio.status" @change="sendGPIO" />
                    </label>
                </span>
              </li>`,
  methods: {
    sendGPIO: function (evt) {
      console.log(this.gpio.text + ': ' + this.gpio.status);

      let data = {
        command: "setGPIO",
        id: this.gpio.text,
        status: this.gpio.status
      }

      let json = JSON.stringify(data);
      this.$socket.send(json);
    }
  }
})

Vue.component('pwm', {
  props: ['gpio'],
  template: ` <li class="mdl-list__item">
                <span class="mdl-list__item-primary-content">{{gpio.text}}</span>
                <span class="mdl-list__item-secondary-action">
                    <div class="mdl-grid">
                        <div class="mdl-cell mdl-cell--10-col">
                            <input :id="'slice-pwm-' + gpio.id" class="mdl-slider mdl-js-slider"
                                type="range" min="0" max="255"
                                v-model="gpio.value" @change="sendPWM" >
                        </div>
                        <div class="mdl-cell mdl-cell--2-col">
                            <input :id="'slice-pwm-text-' + gpio.id" style="width:35px;"
                              v-model="gpio.value" @change="sendPWM" ></input>
                        </div>
                    </div>
                </span>
              </li>`,
  methods: {
    sendPWM: function (evt) {
      console.log(this.gpio.text + ': ' + this.gpio.value);

      let data = {
        command: "setPWM",
        id: this.gpio.text,
        pwm: this.gpio.value
      }

      let json = JSON.stringify(data);
      this.$socket.send(json);
    }
  }
})

Vue.component('action', {
  props: ['action'],
  template: ` <li class="mdl-list__item">
                <span class="mdl-list__item-primary-content">{{action.text}}</span>
                <span class="mdl-list__item-secondary-action">
                <button class="mdl-button mdl-js-button mdl-button--primary mdl-js-ripple-effect" style="width: 160px;"
                @click="doAction">
                Do something
            </button>
                </span>
              </li>`,
  methods: {
    doAction: function (evt) {
      console.log(this.action.text + ': ' + this.action.id);
      let data = {
        command: "doAction",
        id: this.action.id,
      }

      let json = JSON.stringify(data);
      this.$socket.send(json);

      this.action.callback();
    }
  }
})

// Definicion de nuestra app de ejemplo
var app = new Vue({
  el: '#app',
  data: function () {
    return {
      gpio_input_list: [
        { id: 0, text: 'D0', status: 0 },
        { id: 1, text: 'D5', status: 0 },
        { id: 2, text: 'D6', status: 0 },
        { id: 3, text: 'D7', status: 0 },
      ],
      gpio_output_list: [
        { id: 0, text: 'D8', status: 1 },
        { id: 1, text: 'D9', status: 0 },
        { id: 2, text: 'D10', status: 0 },
      ],
      pwm_list: [
        { id: 0, text: 'PWM1', value: 128 },
        { id: 1, text: 'PWM2', value: 128 },
      ],
      action_list: [
        { id: 0, text: 'ACTION1', callback: () => console.log("action1") },
        { id: 1, text: 'ACTION2', callback: () => console.log("action2") },
      ]
    }
  },
  mounted() {
    this.$socket.onmessage = (dr) => {
      console.log(dr);
      let json = JSON.parse(dr.data);
      let gpio = this.$data.gpio_input_list.find(gpio => gpio.text == json.id);
      gpio.status = json.status;
    }
  }
})

function sendAction(id) {
  let data = {
    command: "doAction",
    id: id,
  }

  let json = JSON.stringify(data);
  connection.send(json);
}