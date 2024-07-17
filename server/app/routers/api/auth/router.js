const express = require("express");

const router = express.Router();

const { login, logout, checkAuth } = require("../../../controllers/AuthAction");

router.post("/login", login);
router.get("/checkauth", checkAuth);
router.get("/logout", logout);

module.exports = router;
