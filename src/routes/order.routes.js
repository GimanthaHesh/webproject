const express = require("express");
const router = express.Router();
const {placeorder,updateorder,deleteorder,displayorders,displayorder} = require("../services/order.service")


router.post("/",placeorder)//user
router.get("/",displayorders)
router.get("/:id",displayorder)
router.put("/:id",updateorder)//before payment
router.delete("/:id",deleteorder)//before payment


module.exports=router   