const express = require("express");
const router = express.Router();
const {addfood,deletefood,updatefood,displayfood,displayfoods} = require("../services/food.services")


router.post("/", addfood) //canteen
router.get("/", displayfoods)//canteen 
router.get("/:id", displayfood)//canteen 
router.put("/:id", updatefood)//canteen 
router.delete("/:id", deletefood)//canteen






module.exports=router