const mongoose = require("mongoose");

const BrewBatchSchema = new mongoose.Schema({
    number: Number,
    style: String,
    tank:String,
    batch: [
      {id: String,
       strikeVolume: Number,
       mashTemp: Number,
       spargeVolume: Number,
       startingBrix: Number,
       kettleVolume: Number,
       whirlPoolVolume: Number,
       fmVolume: Number,
       notes: String
      }
    ]    
  });

const BrewBatch = mongoose.model('BrewBatch', BrewBatchSchema);
module.exports = BrewBatch;