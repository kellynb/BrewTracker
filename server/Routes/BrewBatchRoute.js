const express = require("express");
const router = express.Router();
const {create, update} = require("../Controllers/BrewBatchController");

  


router.post("/Brew", create);
router.put("/Brew/:id", update);



module.exports =  router;