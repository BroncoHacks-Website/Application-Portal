const cloudinary = require("../utils/cloudinary");

async function uploadImageInCloudinary(imageURL, {folder: imageLocation, public_id: imageId}) {
  const image = await cloudinary.uploader.upload(imageURL, {
    folder: imageLocation,
    public_id: imageId,
  });
  return image;
}

module.exports = {
  uploadImageInCloudinary,
};
