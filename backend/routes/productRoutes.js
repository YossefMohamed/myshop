const express = require("express");
const Product = require("./../models/productModel");
const router = express.Router();
const handler = require("express-async-handler");
router.get(
  "/",
  handler(async (req, res) => {
    const products = await Product.find();
    res.json(products);
  })
);

router.get(
  "/:id",
  handler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found !");
    }
  })
);

module.exports = router;
