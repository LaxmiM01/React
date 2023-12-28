const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const userRoutes = require('./routes/User');
const todoRoutes = require('./routes/todo');


const app = express()
dotenv.config()
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT

//MonogoDB Connection

mongoose.connect(process.env.MONGODB_URI, {useNewUrlparser:true , useUnifiedTopology:true})
.then(() => {console.log("MongoDB Connected")})
.catch((err) => {console.log(err)})


// app.use("/",(req,res) =>{
//     res.send("App is working")
// })

app.use((req,res) =>{
    res.send("App is working")
})


app.use('/api/user',userRoutes)
app.use('/api/todo',todoRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });