const express = require ('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb+srv://MLaxmi:Nani123@cluster0.kapa9of.mongodb.net/', {useNewUrlParser: true,useUnifiedTopology: true})
  .then(() => {console.log('MongoDB Connected')})
  .catch((err) =>{console.log(err)})
  
  const FormSchema = { 
    name: String,
    email:String,
    phno:Number,
    age:Number,
    gender:String,
    completed:Boolean
  }

  const Form = mongoose.model("form",FormSchema);
  app.get('/', async (req, res) => {
    res.send('Hello World')
  });
  app.post('/forms', async (req, res) => {
    console.log(req.body)
    const { name,email,phno,age,gender, completed } = req.body;

    try{
        const form = new Form({ name,email,phno,age,gender, completed });
        console.log(form)
        await form.save();
        res.json({Message:'form output'});
        
      }catch(error) {
        console.log(error);
        res.status(5000).json({ error: 'Internal Server Error'})
      }
    });
    app.listen(5000, () => {
      console.log("5000 port is running...")
    }
      )
    
    
  