import { action } from "easy-peasy"




export default {
    todos: [
        {
            id: 1,
            title: 'Todo 1',
            completed: true
        },
        {
            id: 2,
            title: 'Todo 2',
            completed: true
        },
        {
            id: 3,
            title: 'Todo 3',
            completed: false
        }
    ],

  

   // Actions
   toggle: action((state, id) => {
       const todo = state.todos.find(todo => todo.id === id)
       todo.completed = !todo.completed
   }),

   remove: action((state, id) => {
       state.todos = state.todos.filter(todo => todo.id !== id)
   }),
   add: action((state, title) => {
       state.todos.push({
           id: Date.now(),
           title,
           completed: false
       })
   })



}