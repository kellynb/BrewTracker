const express = require("express");
const router = express.Router();
const {create, update, find, findSubmit, updateBatch} = require("../Controllers/BrewBatchController");

  

router.get("/brews", find);
router.get("/brews/lastsubmittal", findSubmit);
router.post("/brews/:number/batches/:id", create);
router.put("/brews/:number/batches/:id", updateBatch);
router.put("/Brew/:id", update);



module.exports =  router;