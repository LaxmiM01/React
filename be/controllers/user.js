const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require('../models/User.js')

const userController ={
    signup:async(req,res)=>{
        try{
            const{username,password} =req.body
            const hashedpassword = await bycrypt.has(password,10)
            const user = new User({username:username,password:hashedpassword})
            const data = user.save()
            res.status(201).json({message:"user created successfuly"})

        }catch(error){
            console.log(error)
            res.status(500).json({error : "internal serever error"})
         }
    },
    signin:async(req,res)=>{
      try{
        const{username,password} =req.body
        const user = await User.findOne({username})
        if(!user){
            return res.status(401).json({error:"invalid username"})
           }
           const passwordMatch = await bcrypt.compare(password,user.password)
           if(!passwordMatch){
            return res.status(401).json({error:"invalid password"})
           }
      }catch(error){

      }
    }
}