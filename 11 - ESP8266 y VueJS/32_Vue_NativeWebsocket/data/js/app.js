Vue.use(VueNativeSock.default, 'ws://' + location.hostname + '/ws')

var app = new Vue({
    el: '#app',
	data : function() {
      return {
      counter: 0
    };
  },
  mounted() {
    this.$socket.onmessage = (dr) => {
      console.log(dr.data);
      this.$set(this, 'counter', dr.data);     
    }
  }
})
