const { PutObjectCommand } = require("@aws-sdk/client-s3");
const s3Client = require("../utils/s3");
require('dotenv').config();

async function uploadImageInAWS(/* params ???? */) {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    // Key: req.file.originalname,
    // Body: req.file.buffer,
    // ContentType: req.file.mimetype,
    Key: "test.jpg",
    Body: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
    ContentType: "image/jpg",
  };

  const command = new PutObjectCommand(params);
  await s3Client.send(command);
  const imageUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_BUCKET_REGION}.amazonaws.com/${params.Key}`;

  // return "should replace this to be imageURL here";
  return imageUrl
}

module.exports = {
  uploadImageInAWS,
};
