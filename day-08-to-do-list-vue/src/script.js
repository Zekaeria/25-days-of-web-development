new Vue({
  el:'#app',
  data: {
    title: 'To Do List ',
    todos: [
      { text: 'Practice Vue', id:Date.now() },
      { text: 'Get some sleep', id:Date.now()+1 },
      { text: 'Repair the Batmobile', id:Date.now()+1 }
    ]
  },
  /* METHODS */
  methods: {
    /* Adds new task to 'todo' list array, v-for = access to parent scope properties */
    addToDo(event) {
      var text = event.target.value
      this.todos.push({ text, id: Date.now() })
      event.target.value = ''
    },
    removeToDo(id){
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  } 
})