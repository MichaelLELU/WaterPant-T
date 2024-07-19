const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  create,
  destroy,
} = require("../../../controllers/UserAction");

const userValidation = require("../../../services/userValidation");

const hashPassword = require("../../../services/hashPassword");

router.get("/", browse);

router.get("/:id", read);

router.post("/register", userValidation, hashPassword, create);

router.delete("/:id", destroy);

module.exports = router;
