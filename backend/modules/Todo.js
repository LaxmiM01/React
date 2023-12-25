const mongoose = require('mongoose');

const TodoSchema = { 
    text: String,
    completed:Boolean
  }
 const Todo = mongoose.model("Todo",TodoSchema);

 module.exports = Todo

