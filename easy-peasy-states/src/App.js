import React , {useEffect} from 'react';
import './App.css';
import model from './model'
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { StoreProvider  } from 'easy-peasy'
import { createStore  , useStoreActions} from 'easy-peasy';

function App() {
  const store = createStore(model);


  return (
    <StoreProvider store={store}>
    <div className=' container flex flex-col items-center justify-center py-6 gap-3 '>
     <TodoList />
     <AddTodo />
    </div>
    </StoreProvider>
  );
}

export default App;
