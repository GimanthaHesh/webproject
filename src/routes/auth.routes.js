const express = require("express");
const router = express.Router();
const {register} = require("../services/auth.services")
const {login} = require("../services/auth.services")

router.post("/register",register)

router.post("/login",login)



module.exports=router