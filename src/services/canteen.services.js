
const canteenmodel = require("../models/canteen.modle");


//Add canteen
const create = async (req, res) => {
  try {
    const { Canteenname, openclosetime, description } = req.body;

    if (!Canteenname || !openclosetime || !description) {
      return res.status(500).send({
        success: false,
        message: "Please provide all details",
      });
    }
    const newcanteen = new canteenmodel({
      Canteenname,
      openclosetime,
      description,
    });

    await newcanteen.save();

    res.status(200).send({
      success: true,
      message: "Canteen Added Successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Error in create canteen");
  }
};

const getcanteens = async (req, res) => {
    console.log(req.query.type)
    try {
      const canteens = await canteenmodel.find();
      if (!canteens) {
        res.status(404).send({ success: false, message: "canteens not found" });
      }
      res.status(200).json(canteens);
    } catch (err) {
      console.log(err);
    }
  };

 
module.exports = {create,
    getcanteens
};