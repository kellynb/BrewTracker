const express = require("express");
const router = express.Router();
const {list, update} = require("../Controllers/FermenterController")

  

router.get("/fermenters", list);
router.put("/fermenters/:tankNumber/brew/:number/batch/:id", update);


module.exports =  router;