
const canteenmodel = require("../models/canteen.model");


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

  const getcanteen = async (req, res) => {
    console.log(req.query.type)
    const id = req.params.id;
    try {
      const canteens = await canteenmodel.find(id);
      if (!canteens) {
        res.status(404).send({ success: false, message: "canteens not found" });
      }
      res.status(200).json(canteens);
    } catch (err) {
      console.log(err);
    }
  };

  const deletecanteen = async (req, res) => {
    const id = req.params.id;
    try {
      const result = await canteenmodel.findByIdAndDelete(id);
  
      if (!result) {
        return res
          .status(404)
          .send({ success: false, message: "cannot find canteen" });
      }
      res.status(200).send({ message: "Canteen Deleted" });
    } catch (err) {
      console.log(err);
    }
  };

  const updatecanteen = async (req, res) => {
    try {
      const canteenId = req.params.id;
      if (!canteenId) {
        return res.status(500).send({
          success: false,
          message: "No food id was found, Provide food id",
        });
      }
      const canteen = await foodmodel.findById(canteenId);
      if (!canteen) {
        return res
          .status(404)
          .send({ success: false, message: "Food is Not Found" });
      }
      const {name,opentime,closetime,description, } = req.body;
  
      const updatefood = await foodmodel.findByIdAndUpdate(
        canteenId,
        { name,opentime,closetime,description, },
        { new: true }
      );
      res
        .status(200)
        .send({ success: true, message: " Food was updated Successfully" });
    } catch (err) {
      console.log(err);
    }
  };
  

  const getfoods =async (req, res) => {
    try {
      const findfoods = await canteenmodel.aggregate([
        { $match: { Canteenname: "Applied" } },
        {
          $lookup: {
            from: "foods",
            localField: "_id",
            foreignField: "Canteenid",
            as: "foods",
          },
        },
        { $project: { _id: 0, Canteenname: 1, foods: 1 } },
      ]);
      res.status(200).json(findfoods);
    } catch (err) {
      console.log(err);
    }
  }



 
module.exports = {
    create,
    getcanteens,
    getfoods,
    getcanteen,
    deletecanteen,
    updatecanteen

};