const express = require("express");
const router = express.Router();
const {pay,displaypayment,getpayments} = require("../services/payment.service")

router.post("/", pay)
router.get("/:id", displaypayment)
router.get("/", getpayments)

module.exports=router