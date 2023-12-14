const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = 5000;

//Middleware
app.use(cors());
app.use(bodyParser.json());

//MongoDB Connection
mongoose.connect('mongodb+srv://MLaxmi:Nani123@cluster0.kapa9of.mongodb.net/', {useNewUrlParser: true,useUnifiedTopology: true})
  .then(() => {console.log('Working')})
  .catch((err) =>{console.log(err)})
  const TodoSchema = { 
    text: String,
    completed:Boolean
  }
 const Todo = mongoose.model("Todo",TodoSchema);

app.get('/todos', async (req, res) => {
  console.log("Welcome")
  try{
    const todos = await Todo.find();
    console.log("gettodos",todos)
    res.json(todos);

  }catch(error) {
    console.error(error);
    res.status(500).json({error: 'Internal Server Error'})
  }
  
});
app.post('/todos', async (req, res) => {
  console.log(req.body)
  const { text, completed } = req.body;

  try{
    const todo = new Todo({ text, completed });
    await todo.save();
    res.json(todo);
    
  }catch(error) {
    console.log(error);
    res.status(5000).json({ error: 'Internal Server Error'})
  }
});
app.listen(5000, () => {
  console.log("5000 port is running...")
}
  )

