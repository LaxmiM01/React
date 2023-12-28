const express = require('express')
const router = express.Router()

const {signup,signin} = require ("../controllers/user")



router.get("/signup", signup)
router.post("/signin",signin)