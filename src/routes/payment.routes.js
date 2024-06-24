const express = require("express");
const router = express.Router();
const {pay,displaypayment,getpayments} = require("../services/payment.service")

router.post("/", pay)//user
router.get("/:id", displaypayment)//canteen
router.get("/", getpayments)//canteen

module.exports=router