const mongoose = require("mongoose");

const FermenterSchema = new mongoose.Schema({
    number: Number,
    style: String,
    tank: String,
    tankTemp: [{
      tankTemp: Number,
      date: Date
    }],
    bbls : [Number],
    brix: [Number],
    runOff: Boolean,
    status: String,
    fermentingBrix :[{
      fermentingBrix: Number,
      date: Date
    }],
    spund: Boolean,
    spundPressure: Number,
    yeastDump1: Date,
    yeastDump2: Date,
    cip1: Date,
    cip2: Date,
    clean: Boolean,
    sanitize: Boolean,
    ppm: Number
  });

const Fermenter = mongoose.model('Fermenter', FermenterSchema);
module.exports = Fermenter;