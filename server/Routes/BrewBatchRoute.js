const express = require("express");
const router = express.Router();
const {create, update, find, findSubmit, updateBatch, deleteBatch, deleteBrew} = require("../Controllers/BrewBatchController");

  

router.get("/brews", find);
router.get("/brews/lastsubmittal", findSubmit);
router.post("/brews/:number/batches/:id", create);
router.put("/brews/:number/batches/:id", update);
router.patch("/brews/:number/batches/:id", updateBatch);
router.delete("/brews/:number", deleteBrew);
router.delete("/brews/:number/batches/:id", deleteBatch);

module.exports =  router;