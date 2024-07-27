const { validationResult, matchedData } = require("express-validator");
const ImageModel = require("../models/images");

const uploadImage = async (req, res) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).send({
  //     status: "fail",
  //     errors: errors.array(),
  //   });
  // }

  // const { imageURL, imageLocation, imageId } = matchedData(req);


  try {
    const image = await ImageModel.uploadImageInAWS(/*PUT SOMETHING HERE (SHOULD BE PARAMS like the image and imagetype and stuff)*/);
    res.status(200).send({ status: "success", data: image });
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
};

module.exports = {
  uploadImage
};


