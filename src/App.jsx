import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  //getting my tasks from airtable

  const fetchData = async () => {
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
      }
    }
    try {
      const response = await fetch(url, options)
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
  
      const data = await response.json()
  
      const todos = data.records.map((todo) => {
        const newTodo = {
        id: todo.id,
        title: todo.fields.title,
      }
        return newTodo
    })
      setTodoList(todos)
      setIsLoading(false)
  
    } catch (error) {
      console.log(`Error: ${response.status}`)
    }
  }

//post task to airtable
  const postTodo = async (todo) => {
    try {
        const airtableData = {
            fields: {
                title: todo.title
            }
        };
        const response = await fetch(
            `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
                },
                body: JSON.stringify(airtableData),
            }
        );
        if (!response.ok) {
            const message = `Error has occurred: ${response.status}`;
            throw new Error(`Error: ${response.status}`);
        }

        const dataResponse = await response.json();
        console.log(dataResponse);
//return dataResponse
        return { id: dataResponse.id, title: dataResponse.fields.title };
    } catch (error) {
        console.log(`Error: ${response.status}`);
    }
};

  //delete the airtable

  const postDeleteTodo = async (id) => {
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/Default${id}`, 
        {
          method: 'DELETE',
          headers:  {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
          }
        }
        
      )
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error.message)
    }
}


  useEffect(() => {
    fetchData()
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList))
    }
  }, [todoList, isLoading])



  const addTodo = async (todo) => {
    try {
      const data = await postTodo(todo) 
      setTodoList([...todoList, data])
    } catch (error) {
      console.error(error.message);
    }
  };
  

  const removeTodo = async (id) => {
    try {
      await postDeleteTodo(id);
      const updatedTodoList = todoList.filter(todo => todo.id !== id);
      setTodoList(updatedTodoList);
    } catch (error) {
      console.error(error.message);
    }
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
