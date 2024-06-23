const mongoose = require("mongoose");

//schema
const canteenSchema = new mongoose.Schema(
  {
    Canteenname: {
      type: String,
      required: [true, "canteen name required"],
    },
    openclosetime: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const canteenmodel = mongoose.model("canteen", canteenSchema);

module.exports = canteenmodel;