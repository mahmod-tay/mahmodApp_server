const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  orderHistor: {
    type: Array,
    default: [],
  },
});

const userModule = mongoose.model("user", userSchema);

module.exports = userModule;
