const mongoose = require("mongoose")
const userSchema={
    username:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
}}
const User = mongoose.model("User" , userSchema)

module.exports = User