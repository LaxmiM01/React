import React,{ useState } from 'react';
import axios from 'axios';
import "./SignupLogin.css";

const SignupLogin = () => {
    const [data, setData] = useState({
      username:"",
      password:""
    });
    const inputChange = (event) => {
      console.log("databefore",data)
    setData({...data, [event.target.name]:event.target.value})
    
}
const onSubmitData = async (event) =>{
  event.preventDefault();
  const newData = {
    username:data.username,
    password:data.password
  }
   console.log(newData)
  try {
    const response = await axios.post('http://localhost:8000/signup', newData);
    console.log(response)
     

      
       
  } catch (error) {
    console.error(error);
  }

}
  return (
        
    <div className='container'>

      <form onSubmit={onSubmitData}>

        <div className='group'>
          <label>UserName</label>
          <input className="input-box"
            type="text"
            name="username"
           value={data.username} 
            onChange={inputChange}
          />

        </div>
        <div className='group'>
          <label>Password</label>
          <input className="input-box"
            type="password"
            name="password"
           value={data.password} 
            onChange={inputChange}
          />

        </div>

        <button type="signup">SignupLogin</button>

      </form>

    </div>
  )
}

export default SignupLogin
