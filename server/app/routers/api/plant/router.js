const express = require("express");

const router = express.Router();
const upload = require("../../../services/Multer");
const {
  browse,
  add,
  read,
  destroy,
} = require("../../../controllers/PlantAction");

router.get("/:id", browse);

router.post(
  "/add",
  upload.single("picture"), // Utilisez "picture" pour correspondre au champ du formulaire
  async (req, res, next) => {
    console.info("File received:", req.file); // Affiche le fichier reçu
    console.info("Body received:", req.body); // Affiche les autres données
    next();
  },
  add
);

router.get("/place/:id", read);

router.delete("/:id", destroy);

module.exports = router;
