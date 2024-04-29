new Vue({
    el: '#app',
    data: () => ({
      tasks: [
        {
          done: false,
          text: 'Foobar'
        },
        {
          done: false,
          text: 'Fizzbuzz'
        }
      ],
      task: null
    }),
  
    computed: {
      completedTasks () {
        return this.tasks.filter(task => task.done).length
      },
      progress () {
        return this.completedTasks / this.tasks.length * 100
      },
      remainingTasks () {
        return this.tasks.length - this.completedTasks
      }
    },
  
    methods: {
      create () {
        this.tasks.push({
          done: false,
          text: this.task
        })
  
        this.task = null
      }
    }
  })