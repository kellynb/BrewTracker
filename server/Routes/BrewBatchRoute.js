const express = require("express");
const router = express.Router();
const {create, update, find, findSubmit} = require("../Controllers/BrewBatchController");

  

router.get("/Brew", find);
router.get("/Brewsubmit", findSubmit)
router.post("/Brew", create);
router.put("/Brew/:id", update);



module.exports =  router;