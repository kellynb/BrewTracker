const express = require("express");
const router = express.Router();
const {list, update, listOpen} = require("../Controllers/FermenterController")

  

router.get("/fermenters", list);
router.get("/fermenters/open", listOpen);
router.put("/fermenters/:tankNumber/brew/:number/batch/:id", update);


module.exports =  router;