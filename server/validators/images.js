const { param, body } = require("express-validator");
const ImageModel = require("../models/images");

const imageValidator = [
  body("imageURL")
    .notEmpty()
    .withMessage("Image cannot be empty")
    .isURL()
    .withMessage("Invalid URL format"),
  body("imageLocation")
    .notEmpty()
    .withMessage("Image Location cannot be empty"),
  body("imageId").notEmpty().withMessage("Image ID cannot be empty"),
];

module.exports = {
  imageValidator,
};
