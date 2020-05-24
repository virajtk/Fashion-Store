require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const users = require("./routes/api/users");

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

//DATABASE_URL=mongodb://localhost:27017/Subscribers

const db = mongoose.connection;

db.on("error", (error) => {
  console.error(error);
});
db.once("open", () => {
  console.log("Connected to DataBase");
});

app.use(express.json());

app.use(cors());

// Subscriber
const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter);

// Admin User
const adminUserRouter = require("./routes/adminUser");
app.use("/adminUser", adminUserRouter);

// Product Category
const productCategoryRouter = require("./routes/productCategory");
app.use("/category", productCategoryRouter);

// Product

const productRouter = require('./routes/product')
app.use('/product', productRouter)

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

//user
const userRouter = require('./routes/api/users')
app.use('/api/users', users)

//const port = process.env.PORT || 3000;
//app.listen(port, () => console.log(`Server up and running on port ${port} !`));
app.listen(3000, () => {
  console.log('Server Started');

});
