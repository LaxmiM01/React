  const express = require("express")
  const router = express.Router()
  const {addtodos,gettodos,edittodos,deletetodos} = require("../controllers/todoController")
  
  router.get("/gettodos",gettodos)
  router.post("/addtodos",addtodos)
  router.get("/edittodos",edittodos)
  router.post("/deletetodos",deletetodos)

