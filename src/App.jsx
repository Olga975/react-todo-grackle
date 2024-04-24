import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const savedTodoList = localStorage.getItem("savedTodoList")
          const initialTodoList = savedTodoList ? JSON.parse(savedTodoList) : []
          resolve({ data: { todoList: initialTodoList } })
        }, 2000)
      });
    };

    fetchData().then(result => {
      setTodoList(result.data.todoList)
      setIsLoading(false)
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList))
    }
  }, [todoList, isLoading])

  function addTodo(newTodo) {
    setTodoList(prevTodoList => [...prevTodoList, newTodo])
  }

  function removeTodo(id) {
    setTodoList(prevTodoList => prevTodoList.filter(todo => todo.id !== id))
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (<p>Loading...</p>) : (<TodoList todoList={todoList} onRemoveTodo={removeTodo} />)}
    </>
  );
}

export default App;
