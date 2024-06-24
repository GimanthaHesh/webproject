// admin
//canteen - create,update,delete 
//user - display users , 
const express = require("express");
const router = express.Router();
const {create,getcanteens,getcanteen,deletecanteen,updatecanteen} = require("../services/canteen.services")
const {getuser,getallusers,deleteuser} = require("../services/user.services")

router.post("/", create)
router.get("/", getcanteens)

router.get("/all",getallusers)
router.get("/",getuser)//id
router.delete("/:id",deleteuser)

//remove all
// middleware