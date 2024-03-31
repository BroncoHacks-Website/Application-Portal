const express = require("express");
const router = express.Router();
const ImageController = require("../controllers/images");
const { imageValidator } = require("../validators/images");

// POST route to upload an image
router.post("/image", imageValidator, ImageController.uploadImageInCloudinary);
