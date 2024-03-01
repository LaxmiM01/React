const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require('../models/User.js')
const { config } = require("dotenv")


    //Signup logic
    const signup=async(req,res)=>{
        console.log("signup")
        try{
            const{username, email, password} =req.body
            console.log(req.body)

            //check it the username already exists
            const existingUser = await User.findOne({username});
            console.log(existingUser) ;

            if (existingUser) {
                return res.status(400).json({ error: "Username alreay exists"})
            }

            const existingemail = await User.findOne({ email });
            console.log(existingemail);
            if (existingemail) {
                return res.status(400).json({ error: "email already exists" });
            }

            //Hash the Password
            const saltRounds = 10;
            console.log(saltRounds);
            const hashedpassword = await bcrypt.hash(password,saltRounds);
            console.log(hashedpassword);

            //Create a new user
            const newUser = new User({
                username:username,
                email:email,
                // emailuserId:emailuserId,
                password:hashedpassword
            });
            await newUser.save();
            res.status(201).json({message:"The user save successfuly"})
         }catch(error){
            console.log(error)
            res.status(500).json({error : "Internal serever error"})
         }
     }
    const login=async(req,res)=>{
      try{
        const {emailuserId,password} =req.body;
        console.log("emailuserId", emailuserId, "password", password);
        const user = await User.find({
            $or: [
                { username: { $regex: emailuserId, $options: "i"} },
                { email: {$regex:emailuserId, $options: "i"} },
            ],
            });
            console.log(user);

        if(!user){
            return res.status(403).json({ message:"invalid credentials"})
           }
            console.log("laxmi1", password, user.password);
           const matchedPassword = await bcrypt.compare(password,user[0].password);
           console.log("laxmi2")
           console.log("matchedPassword", matchedPassword);

           if(!matchedPassword){
            return res.status(401).json({error:"Invalid credential"});
           }
        //    res.status(200).json({ message: "registered Sucessfully" })
           const token = jwt.sign({ userId: user[0]._id}, process.env.JWT_SECRET, {
            expiresIn: "1h" // token expires in 1 hour (adjust as needed)
           });
           res.status(200).json({ token })

      }catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" })

      }
    }

    module.exports = { signup, login }
