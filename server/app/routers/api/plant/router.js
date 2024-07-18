const express = require("express");

const router = express.Router();

const { browse, add, read } = require("../../../controllers/PlantAction");

router.get("/:id", browse);

router.post("/add", add);

router.get("/place/:id", read);

module.exports = router;
