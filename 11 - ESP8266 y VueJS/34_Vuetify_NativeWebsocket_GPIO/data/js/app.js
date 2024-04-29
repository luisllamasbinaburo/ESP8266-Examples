Vue.use(VueNativeSock.default, 'ws://' + location.hostname + '/ws', { format: 'json' })

Vue.component('gpio-input', {
  props: ['gpio'],
  template: `
    <v-list-tile avatar>
      <v-list-tile-content>
        <v-list-tile-title>{{gpio.text}}</v-list-tile-title>
      </v-list-tile-content>
    <v-list-tile-action>
      <v-list-tile-action-text>{{ gpio.status ? "ON " : "OFF "}}</v-list-tile-action-text>
      <v-icon :color="gpio.status ? 'teal' : 'grey'">fiber_manual_record</v-icon>
    </v-list-tile-action>
    </v-list-tile>
    `
})


Vue.component('gpio-output', {
  props: ['gpio'],
  template: ` 
    <v-list-tile avatar>
      <v-list-tile-content>
        <v-list-tile-title>{{gpio.text}}</v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-switch v-model="gpio.status" class="ma-2" :label="gpio.status ? 'ON' : 'OFF'" @change="sendGPIO"></v-switch>
      </v-list-tile-action>
    </v-list-tile>
`,
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
  template: `     
      <v-list-tile avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{gpio.text}}</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
        <v-slider thumb-label v-model="gpio.value" min="0" max="255" @change="sendPWM">
            <template v-slot:append>
              <v-text-field class="mt-0 pt-0" hide-details single-line  type="number" style="width: 50px"
                    v-model="gpio.value" @change="sendPWM"></v-text-field>
              </template>
              </v-slider>
        </v-list-tile-action>
      </v-list-tile>`,
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
  template: ` 
        <v-list-tile avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{action.text}}</v-list-tile-title>
        </v-list-tile-content>
      <v-list-tile-action>
      <v-btn text small color="flat" @click="doAction">Do something</v-btn>
      </v-list-tile-action>
      </v-list-tile>
`,
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