import React , {Fragment , useEffect} from 'react'
import TodoItem from './TodoItem'
import {useStoreState } from 'easy-peasy'

const TodoList = () => {
    const todos = useStoreState(state => state.todos);
    
  return (
    <Fragment >
      <h1 className='text-3xl font-bold'>Todo List</h1>
      <p className='border-b-2 border-slate-800'>Click here to toggle todo completed</p>
      {todos.map(todo => (
        <TodoItem key={todo.id} Todo={todo}/>
        ))}
     
    </Fragment>
  )
}

export default TodoList
