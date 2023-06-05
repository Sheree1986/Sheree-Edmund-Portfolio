const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const User = require("../models/userModel");


const createUser = asyncHandler(async (req, res) => {
  const user = await User.create({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact
  });
  res.json(user);
});


const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.json(users);
});

const deleteUser = asyncHandler(async (req, res) => {

  const id = req.params.id;
  console.log(id)
  User.findByIdAndRemove(id)
    .exec()
    .then(()=> res.status(204).json({
      message:'User successfully deleted',
      success: true,
    }))
    .catch((err) => res.status(500).json({
      success: false,
    }));
});
module.exports = { createUser, getUsers,deleteUser };
