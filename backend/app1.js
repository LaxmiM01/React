const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Todo = require('./modules/Todo')
const User = require('./modules/User')
const dotenv = require("dotenv")
const UserRoutes = require("./Routes/UserRoutes")
const todoRoutes = require("./Routes/todoRoutes")

const app = express();
// const PORT = 8000;
dotenv.config()
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true,useUnifiedTopology: true})
  .then(() => {console.log('MongoDB Connected')})
  .catch((err) =>{console.log(err)})


  app.use("/api/user",UserRoutes)
  app.use("/api/todo",todoRoutes)

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  