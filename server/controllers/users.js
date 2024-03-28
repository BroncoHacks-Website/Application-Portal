const { validationResult, matchedData } = require("express-validator");
const UserModel = require("../models/users");
const cloudinary = require("../utils/cloudinary");

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.getUsers();
    if (users.length === 0) {
      return res
        .status(404)
        .send({ status: "fail", message: "No Users Not Found" });
    }
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
}; // end getAllUsers

const getUserByID = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      status: "fail",
      errors: errors.array(),
    });
  }

  const data = matchedData(req);

  try {
    const user = await UserModel.getUser(data.userid);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
}; //end getUserByID

const createUser = async (req, res) => {
  // validate (email is in correct format and password fulfills requirements)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      status: "fail",
      errors: errors.array(),
    });
  }

  const { email, password } = matchedData(req);

  try {
    // cloudinary.uploader.upload(
    //   "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
    //   { public_id: "olympic_flag", folder: "testImages" }
    // );
    const newUser = await UserModel.createAccount(email, password);
    res.status(200).send({ status: "success", data: newUser });
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
}; //end createUser

const deleteUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      status: "fail",
      errors: errors.array(),
    });
  }

  const data = matchedData(req);

  try {
    const deletedUser = await UserModel.deleteUser(data.userid);
    res.status(200).send({ status: "success", data: deletedUser });
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
};

const uploadImage = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      status: "fail",
      errors: errors.array(),
    });
  }

  const { imageURL, imageLocation, imageId } = matchedData(req);

  try {
    const image = await cloudinary.uploader.upload(imageURL, {
      folder: imageLocation,
      public_id: imageId,
    });
    // cloudinary.uploader.upload(
    //   imageURL,
    //   { public_id: imageId, folder: imageLocation }
    // );
    res.status(200).send({ status: "success", data: image });
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
};

module.exports = {
  getAllUsers,
  getUserByID,
  createUser,
  deleteUser,
  uploadImage,
};
