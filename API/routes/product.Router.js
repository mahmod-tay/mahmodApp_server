const express = require("express");
const { createProduct, findProduct, deleteProduct } = require("../controllers/product.controller");
const productRout = express.Router();

productRout.post("/createProduct", createProduct)
productRout.post("/findProduct", findProduct)
productRout.post("/deleteProduct", deleteProduct)

module.exports = productRout;