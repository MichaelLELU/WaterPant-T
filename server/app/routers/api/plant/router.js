const express = require("express");

const router = express.Router();

const {
  browse,
  add,
  read,
  destroy,
} = require("../../../controllers/PlantAction");

router.get("/:id", browse);

router.post("/add", add);

router.get("/place/:id", read);

router.delete("/:id", destroy);

module.exports = router;
