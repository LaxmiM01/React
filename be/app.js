const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const cors = require("cors");
const dotenv = require("dotenv");
const config = require("./config")
const bcrypt = require("bcrypt");
const userRoutes = require('./routes/User');
const todoRoutes = require('./routes/todo');
const { requireAuth } = require("./middleware/user");


const app = express()
// dotenv.config()
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT

//MonogoDB Connection

mongoose
.connect(process.env.MONGODB_URI, {
useNewUrlparser:true , 
useUnifiedTopology:true
})
.then(() => {
  console.log("MongoDB Connected")
})
.catch((err) => {
  console.log(err)
})



app.use("/user", userRoutes);
app.use("/todos", requireAuth, todoRoutes);

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
  });