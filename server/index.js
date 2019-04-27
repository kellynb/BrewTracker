
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(process.env.mongodburi, {useNewUrlParser: true});
const app = express();

const brewBatchRoute = require("./Routes/BrewBatchRoute");
const fermenterRoute = require("./Routes/FermenterRoute");


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(brewBatchRoute);
app.use(fermenterRoute);




app.listen(3001, (err) => {
    if (err) {
      return console.log("Error", err);
    }
    console.log("Web server is now listening for messages", err);
});