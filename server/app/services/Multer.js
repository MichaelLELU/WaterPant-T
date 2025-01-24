const multer = require("multer");
const path = require("path");

// Validation des fichiers (ex: uniquement images)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); // Accepter le fichier
  } else {
    cb(
      new Error("Type de fichier non supporté. Veuillez envoyer une image."),
      false
    );
  }
};

// Configuration de Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/uploads")); // Dossier de stockage
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Limite de taille des fichiers (ex: 5 Mo)
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // Limite de 5 Mo
  },
  fileFilter, // Appliquer le filtre de validation des fichiers
});

module.exports = upload;
