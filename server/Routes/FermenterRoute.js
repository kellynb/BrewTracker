const express = require("express");
const router = express.Router();
const {list, update, fermenterUpdate, listFermenter, clearFermenter} = require("../Controllers/FermenterController")

  

router.get("/fermenters", list);
router.get("/fermenters/:tankNumber", listFermenter);
router.put("/fermenters/:tankNumber/brew/:number", fermenterUpdate);
router.put("/fermenters/:tankNumber/brew/:number/batch/:id", update);
router.put("/fermenters/:tankNumber/transfer/:number", clearFermenter);



module.exports =  router;