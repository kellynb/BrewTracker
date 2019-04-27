const mongoose = require("mongoose");

const FermenterSchema = new mongoose.Schema({
    number: Number,
    style: String,
    tank: String,
    bbls : [Number],
    runOff: Boolean
  });

const Fermenter = mongoose.model('Fermenter', FermenterSchema);
module.exports = Fermenter;