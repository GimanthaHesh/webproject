const express = require("express");
const router = express.Router();
const {create,getcanteens} = require("../services/canteen.services")

router.post("/", create)
router.get("/", getcanteens)

module.exports=router