// Definicion de un componente
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li> {{ todo.text }} \
            <input type="checkbox" id="checkbox" v-model="todo.value"> \
            <span v-if="todo.value">{{ todo.hidden }}</span> \
            </li>'
})
 
// Definicion de nuestra app de ejemplo
var app = new Vue({
  el: '#app',
  data: {
    myList: [
      { id: 0, text: 'Item1', hidden: 'Hidden1' },
      { id: 1, text: 'Item2', hidden: 'Hidden2' },
      { id: 2, text: 'Item3', hidden: 'Hidden3' }
    ]
  }
})