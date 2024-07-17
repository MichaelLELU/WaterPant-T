const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/SolarExpoAction");

router.get("/", browse);

module.exports = router;
