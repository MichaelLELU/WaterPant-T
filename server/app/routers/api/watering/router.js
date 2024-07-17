const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/WateringFreqAction");

router.get("/", browse);

module.exports = router;
