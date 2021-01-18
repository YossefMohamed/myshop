const express = require("express");

const router = express.Router();
const handler = require("express-async-handler");
const { getProducts, getProductById } = require("../controllers/productController");
router.get(
  "/",
  getProductById
  
);

router.get(
  "/:id",
  getProducts
);

module.exports = router;
