const express = require("express");
const router = express.Router();
const {list, transfer, openTank} = require("../Controllers/FermenterController")

  

router.get("/Fermenters", list);
router.get("/OpenTanks", openTank);
router.put("/Tank/:id", transfer);


module.exports =  router;