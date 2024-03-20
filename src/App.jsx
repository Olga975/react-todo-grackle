import React, { useState } from 'react'; 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

<<<<<<< HEAD


function App() {

  const [newTodo, setNewTodo] = useState("");
=======


function App() {
>>>>>>> 631dd58d07eca280419a094be11b2a03780edaa4
  
  return (
    <div>
      <h1>Todo List</h1>
<<<<<<< HEAD
      <AddTodoForm newTodo={newTodo} onAddTodo={setNewTodo} />
      <p>New Todo: {newTodo}</p> 
=======
      <AddTodoForm />
>>>>>>> 631dd58d07eca280419a094be11b2a03780edaa4
      <TodoList />
    </div>
  )
}

export default App
