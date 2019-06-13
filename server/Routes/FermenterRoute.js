const express = require("express");
const router = express.Router();
const {list, transfer, listOpen} = require("../Controllers/FermenterController")

  

router.get("/Fermenters", list);
router.get("/fermenters/open", listOpen);
router.put("/Tank/:id", transfer);


module.exports =  router;