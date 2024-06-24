const express = require("express");
const app = express();
const { PORT } = require("./utils/config");
const connectDB = require("./database/config");
const dotenv = require('dotenv');
const authroutes = require('./routes/auth.routes')
const foodroutes = require('./routes/food.routes')
const payamentroutes = require('./routes/payment.routes')
const orderroutes = require("./routes/order.routes")
const canteenroutes = require('./routes/canteen.routes')
const bodyParser = require("body-parser")
const userroutes = require('./routes/user.route')

app.use(bodyParser.json())

dotenv.config();
connectDB();

app.use("/auth",authroutes)
app.use("/payments",payamentroutes)
app.use("/canteen",canteenroutes)
app.use("/foods",foodroutes)
app.use("/orders",orderroutes)
app.use("/user",userroutes)

app.listen(PORT, () => {
  console.log("API is running on port", PORT);
});
