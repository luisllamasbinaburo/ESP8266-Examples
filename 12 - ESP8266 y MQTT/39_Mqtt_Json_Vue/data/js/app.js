Vue.component('mqtt-message', {
    props: ['mqtt_message'],
    template: `
  <v-timeline-item
  color="blue"
  small
>
  <v-layout pt-3>
    <v-flex xs3>
      {{mqtt_message.date}}
    </v-flex>
    <v-flex>
      <strong>GPIO: {{mqtt_message.id}}</strong>
      <div class="caption">Status: {{mqtt_message.status}}</div>
    </v-flex>
  </v-layout>
</v-timeline-item>
    `
})

var app = new Vue({
    el: '#app',
    data: function () {
        return {
            mqtt_message_list: [

            ]
        }
    },
    mounted() {
        client = new Paho.MQTT.Client("192.168.1.150", 9001, createGuid())

        var options = {
            onSuccess: onConnect,
            onFailure: onFailure
        };

        client.onConnectionLost = onConnectionLost;
        client.onMessageArrived = onMessageArrived;

        client.connect(options);
    },
})