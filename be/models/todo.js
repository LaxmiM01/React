const mongoose = require("mongoose")
const todoSchema={
userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
   text:{type:String,require:true},
   completed:{type:Boolean,default:false}
}
const User = mongoose.model("User" , userSchema)
