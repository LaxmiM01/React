const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Todo = require('./modules/Todo')
const User = require('./modules/User')
const dotenv = require("dotenv")

const app = express();
// const PORT = 8000;
dotenv.config()
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true,useUnifiedTopology: true})
  .then(() => {console.log('MongoDB Connected')})
  .catch((err) =>{console.log(err)})

  // const Todo = mongoose.model("Todo", {
  //   text: String,
  //   completed: Boolean
  // });
  // const userSchema={
  //   username: String,
  //   password: String
  // }
  // const User = mongoose.model('User', userSchema);

  //Signup And Login
  app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const newUser = new User({ username, password });
      console.log(newUser)
      await newUser.save();
      res.json( {message: 'User Created Successfully'});
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  //Get all todos
  // app.get('/todos',async (req, res) => {
  //   try {
  //     const todos = await Todo.find();
  //     res.json(todos);
  //     console.log("hi")
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // });

  //Add a new todo
  // app.post('/todos', async (req, res) => {
  //   const { text, completed } = req.body;
  
  //   try {
  //     const todo = new Todo({ text, completed });
  //     await todo.save();
  //     res.json(todo);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // });
  

  // //Update a todo
  // app.put('/todos/:id', async (req, res) => {
  //   const { id } = req.params;
  //   // const { text, completed } = req.body;
  
  //   try {
  //     const updatedTodo = await Todo.findByIdAndUpdate(id, req.body);
  //     res.json(updatedTodo);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // });

  // //Delete a todo
  // app.delete('/todos/:id', async (req, res) => {
  //   console.log("req.params",req.params)
  //   const { id } = req.params;
  
  //   try {
  //     await Todo.findByIdAndDelete(id);
  //     res.json({ success: true });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  