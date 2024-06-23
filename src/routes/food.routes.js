const express = require("express");
const router = express.Router();
const {addfood,deletefood,updatefood} = require("../services/food.services")


router.post("/foods", addfood)
router.delete("/foods/:id", deletefood)
router.put("/foods/:id", updatefood)




module.exports=router