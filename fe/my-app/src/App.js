import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  'bootstrap/js/dist/base-component';

const API_URI = "http://localhost:4000";

const App = () => {
  // const [newTodo, setNewTodo] = useState("")
  const [todos, setTodos] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [editingTodoId, setEditingTodoId] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [token, setToken] = useState([]);
  
  useEffect(() => {
    const getData = () => {
      fetchTodos();
    };
    getData();
  }, []);
  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${API_URI}/todos`,{
        headers: {
          Authorization: `${token}`,
        },
      });
      setTodos(response.data);
    }catch(error) {
      console.error(" Enter fetching todos", error);
    }
  }
  const addTodo = async () => {
    
    try {
       await axios.post(
        `${API_URI/todos}`,
      { 
        title, 
        description 
      },

      {
        headers: {
          Authorization: `${token}`,
        },
      }
       );
      fetchTodos()
      setTitle('');
      setDescription("")

    }catch (error) {
      console.error("Enter adding todo:", error);
    }
   };
   const handleSignup = async () => {
    try {
      const response = await axios.post(`${API_URI}/signup`, {
        username,
        email,
        password,

      });
      setToken(response.data.token);
    }catch (error) {
      console.log("error signing up", error)
    }
   };
   const handleSignin = async () => {
    try{
      const response = await axios.post(`${API_URI}/signin`,{
       
        email,
        password,
      });
      setToken(response.data.token)
    }catch (error) {
      console.log("Enter signing in:", error)
    }
   }
   const handleLogout = () => {
    setTodos("")
   }
  return (
    <div className='container my-5'>
      <h1>Todo App</h1>
      {token ? (
        <>
        <button onClick={handleLogout} className='btn btn-primary mb-3'>
          Logout
        </button>
        
        <input
        type='text'
        className='from-control mb-3'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Enter todo title'
        />
        <input
        type='text'
        className='from-control mb-3'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Enter todo description'
        />
        <button onClick={addTodo} className='btn btn-primary mb-3'>
          Add Todo
        </button>
        <ul className='list-group'>
          {todos.map((todo) => {
            
            <li key={todo.id} className='list-group-item'>
              
              {/* {editingTodoId === todo.id ? (
                <input 
                type='text'
                className='from-control'
                value={todo.title}
                onChange={(e) => editTodo(todo.id, e.target.value)}
                />
              ) :(
                todo.title
              )} */}
              {/* <button onClick={() => deleteTodo(todo.id)}
              className='btn btn-danger btn-sm mx-2'
              >
                Delete
              </button> */}
              {!editingTodoId && (
                <button 
                onClick={() => setEditingTodoId(todo.id)}
                className='btn btn-primary btn-sm'
                >
                  Edit
                  </button>
              )}
              </li>
           } )
         }
         </ul>
         </>
      ) : (
        <>
        <input
        type='text'
        className='form-control mb-3'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Enter Username'
        />
        <input
        type='text'
        className='form-control mb-3'
        value={username}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter Email'
        />
        <input
        type='text'
        className='form-control mb-3'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Enter Password'
        />
        <button onClick={handleSignup} className='btn btn-primary mb-3'>
          Sign Up
          </button>
          <button onClick={handleSignin} className='btn btn-primary mb-3'>
          Sign In
          </button>
        </>
      )}
    </div>
  );
}

export default App;
