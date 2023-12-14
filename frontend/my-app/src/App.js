import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/todos');
      console.log("response",response.data)
      setTodos(response.data);
    }catch(error) {
      console.error(error);
    }
  }

  const addTodo = async () => {
    const data ={
      text: newTodo,
      completed: false
    }
    try {
      const response = await axios.post('http://localhost:5000/todos',data);
      console.log("response",response)
        fetchTodos()
      ([...todos, response.data]);
        setNewTodo('');
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>{todo.text}</li>
        ))}
      </ul>
      <div>
        <input type='text' value={newTodo} onChange={(e) => {setNewTodo(e.target.value)} }/>

        <button onClick={addTodo}>Add Todo</button>
      </div>
    </div>
  );
}

export default App;
