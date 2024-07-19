const express = require("express");

const router = express.Router();

const {
  browse,
  add,
  read,
  destroy,
} = require("../../../controllers/PlantAction");

const plantValidation = require("../../../services/plantValidation");

router.get("/:id", browse);

router.post("/add", plantValidation, add);

router.get("/place/:id", read);

router.delete("/:id", destroy);

module.exports = router;
