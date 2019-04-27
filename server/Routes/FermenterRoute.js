const express = require("express");
const router = express.Router();
const {list, transfer} = require("../Controllers/FermenterController")

  

router.get("/Fermenters", list);
router.put("/Tank/:id", transfer);



module.exports =  router;