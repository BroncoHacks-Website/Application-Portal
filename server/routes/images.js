const express = require("express");
const multer = require("multer");

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

const ImageController = require("../controllers/images");
// const { imageValidator } = require("../validators/images");

// POST route to upload an image
router.post("/upload", upload.single('test'), ImageController.uploadImage); // TEMPORARILY MAKING THIS A POST ROUTE IN USERS

module.exports = router;