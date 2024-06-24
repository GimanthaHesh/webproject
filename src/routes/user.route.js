const express = require("express");
const router = express.Router();
const {getuser,getallusers,deleteuser,updateuser} = require("../services/user.services")
const {authmiddlewear} = require("../middlewears/auth.middlewear")
const {adminmiddlewear} = require("../middlewears/admin.middlewear")

//admin

router.get("/",authmiddlewear,getallusers)
router.get("/:id",authmiddlewear,adminmiddlewear,getuser)
router.get("/:id",updateuser)
router.delete("/:id",deleteuser)

// update 


module.exports=router



