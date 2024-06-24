const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authmiddlewear = require("../middlewears/authmw");
const usermodel = require("../models/user_m");
const canteenmodel = require("../models/canteen_m");
const foodmodels = require("../models/foods_m");
