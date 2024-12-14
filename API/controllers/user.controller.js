const userModule = require("../models/user.model");

const createUser = async (req, res) => {
  try {
    const { name, phone, password, } = req.body;
    const user = await userModule.create({
      name,
      phone,
      password,
    });
    res.status(200).json({
      user,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const findUser = async (req, res) => {
  try {
    const { name } = req.body;
    const user = await userModule.find({ name });
    res.status(200).json({
      user,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { name } = req.body;
    const user = await userModule.delete({ name });
    res.status(200).json({
      user,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const logIn = async (req, res) => {
  try {
    const { password, phone } = req.body;
    const user = await userModule.findOne({ phone, password });
    res.status(200).json({
      user,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createUser,
  findUser,
  deleteUser,
  logIn,
};
