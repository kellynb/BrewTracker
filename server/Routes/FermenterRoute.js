const express = require("express");
const router = express.Router();
const {list, update, fermenterUpdate, listFermenter} = require("../Controllers/FermenterController")

  

router.get("/fermenters", list);
router.get("/fermenters/:tankNumber", listFermenter)
router.put("/fermenters/:tankNumber/brew/:number", fermenterUpdate);
router.put("/fermenters/:tankNumber/brew/:number/batch/:id", update);



module.exports =  router;