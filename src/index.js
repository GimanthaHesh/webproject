const express = require("express");
const app = express();
const { PORT } = require("./utils/config");
const connectDB = require("./database/config");
const dotenv = require('dotenv');
const authroutes = require('./routes/auth.routes')
const foodroutes = require('./routes/food.routes')
const payamentroutes = require('./routes/payment.routes')

const canteenroutes = require('./routes/canteen.routes')

dotenv.config();
connectDB();

app.use("/auth",authroutes)
app.use("/payments",payamentroutes)
app.use("/canteen",canteenroutes)

app.listen(PORT, () => {
  console.log("API is running on port", PORT);
});
