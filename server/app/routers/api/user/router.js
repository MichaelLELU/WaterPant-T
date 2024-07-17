const express = require("express");

const router = express.Router();

// TODO: validate user midleware

const {
  browse,
  read,
  create,
  destroy,
} = require("../../../controllers/UserAction");

const hashPassword = require("../../../services/hashPassword");

router.get("/", browse);

router.get("/:id", read);

router.post("/register", hashPassword, create);

router.delete("/:id", destroy);

module.exports = router;
