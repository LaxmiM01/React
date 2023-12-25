import axios from "axios";
import { useState } from 'react';
import './Form.css'

const Form = () => {
    const [data, setData] = useState({
        name:"",
        email:"",
        phno:"",
        age:"",
        gender:""
        })  

  
    const handleInputChange = (event) => {
      console.log("databefore",data)
    setData({...data, [event.target.name]:event.target.value})

  }
const onSubmitData = async (event) =>{
    event.preventDefault();
    const newData = {
        name:data.name,
        email:data.email,
        phno:data.phno,
        age:data.age,
        gender:data.gender,
        completed:false
    }
    try {
        const response = await axios.post('http://localhost:5000/forms', newData);
        console.log(response)
         console.log(newData)
        setData('');
        
      } catch (error) {
        console.error(error);
      }
    
}
console.log("dataafter",data)
return(
    <div className="form-container">
        <form onSubmit={onSubmitData}>
        
        <div className="form-group">
          <label>Name</label>
          <input className="input-box"
            type="text"
            name="name"
           value={data.name} 
            onChange={handleInputChange}
          />
        </div>  
        <div className="form-group">
          <label>Email</label>
          <input className="input-box"
            type="email"
            name="email"
           value={data.email} 
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Phno</label>
          <input className="input-box"
            type="number"
            name="phno"
           value={data.phno} 
            onChange={handleInputChange}
          />
        </div> 
         <div className="form-group">
          <label>Age</label>
          <input className="input-box"
            type="number"
            name="age"
           value={data.age} 
            onChange={handleInputChange}
          />
        </div> 
         <div className="form-group">
          <label>Gender</label>
          <input className="input-box"
            type="text"
            name="gender"
           value={data.gender} 
            onChange={handleInputChange}
          />
        </div> 
        <button type="submit">Submit</button>   
       </form>
        
    </div>
)}

export default Form;



