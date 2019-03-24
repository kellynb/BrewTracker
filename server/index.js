
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
mongoose.connect('mongodb://brewDaddy:brewGoat6.9@ds227565.mlab.com:27565/brewtrack', {useNewUrlParser: true});
const app = express();

const brewBatchRoute = require("./Routes/BrewBatchRoute");


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(brewBatchRoute);




app.listen(3001, (err) => {
    if (err) {
      return console.log("Error", err);
    }
    console.log("Web server is now listening for messages", err);
});