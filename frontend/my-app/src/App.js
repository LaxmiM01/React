// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [newTodo, setNewTodo] = useState('');
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/todos');
//       console.log("response",response.data)
//       setTodos(response.data);
//     }catch(error) {
//       console.error(error);
//     }
//   }

//   const addTodo = async () => {
//     const data ={
//       text: newTodo,
//       completed: false
//     }
//     try {
//       const response = await axios.post('http://localhost:5000/todos',data);
//       console.log("response",response)
//         fetchTodos()
//       ([...todos, response.data]);
//         setNewTodo('');
//     } catch (error) {
//       console.error(error);
//     }
//   };


//   return (
//     <div>
//       <h1>Todo App</h1>
//       <ul>
//         {todos.map(todo =>{
//           return <li>{todo.text}</li>
//         })}
//       </ul>
//       <div>
//         <input type='text' value={newTodo} onChange={(e) => {setNewTodo(e.target.value)} }/>

//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//     </div>
//   );
// }

// export default App;

import React,{useEffect,useState} from 'react'
import axios from "axios";

const App = () => {

  const [todos,setTodos]=useState([])
  const [newTodo,setNewTodo]=useState('')
  // const [editTodo,setEditTodo]=useState(null)

  useEffect(()=>{
      fetchTodos()
    },[])

  const fetchTodos = async ()=>{
  
    try {
      const response= await axios.get("http://localhost:5000/todos")
      console.log("get response",response.data)
      setTodos(response.data)
    } catch(error){
      console.log(error)
    }
  }
  const addTodo =async ()=>{
    const data={
      text:newTodo,
      completed:false
    }
    try{
      const response = await axios.post('http://localhost:5000/todos',data)
      fetchTodos()
      setNewTodo('');
    } catch(error){
      console.log(error)
    }
   };

  //  const deleteTodo =async (id) =>{
  //   try{
  //   await axios.delete (http://localhost:5000/todos/${id});
  //   setTodos(todos.filter(todo => todo._id !==id));
  //  }catch(error){
  //   console.log(error)
  //  }

return (
<div>
      <h1> Todo App</h1>
      <div>
        <input type="text" placeholder='Enter text here' value={newTodo} onChange={(e)=>{setNewTodo(e.target.value)}}/>
        <button onClick={addTodo}>AddTodo</button>
      </div>
      <ul>
        {todos.map(todo=>{
         return <li>{todo.text}</li>
        })}
      </ul>

    </div>
  )
}


export default App