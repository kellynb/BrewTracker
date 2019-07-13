const mongoose = require("mongoose");

const FermenterSchema = new mongoose.Schema({
    number: Number,
    style: String,
    tank: String,
    tankTemp: Number,
    bbls : [Number],
    brix: [Number],
    runOff: Boolean,
    status: String
  });

const Fermenter = mongoose.model('Fermenter', FermenterSchema);
module.exports = Fermenter;