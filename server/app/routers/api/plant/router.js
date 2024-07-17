const express = require("express");

const router = express.Router();

const { browse, add } = require("../../../controllers/PlantAction");

router.get("/:id", browse);

router.post("/add", add);

module.exports = router;
