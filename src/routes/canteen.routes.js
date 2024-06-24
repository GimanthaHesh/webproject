const express = require("express");
const router = express.Router();
const {create,getcanteens,getcanteen,deletecanteen,updatecanteen} = require("../services/canteen.services")


//admin

router.post("/", create)
router.get("/", getcanteens)
router.get("/:id",getcanteen)
router.delete("/:id",deletecanteen)
// admin & canteens
router.put("/:id",updatecanteen)







module.exports=router