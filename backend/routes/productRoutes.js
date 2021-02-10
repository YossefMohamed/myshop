const express = require("express");

const router = express.Router();
const protect = require("../controllers/authMiddleware");
const {
  getProducts,
  getProductById,
  addReviewToProduct,
  getSearch,
} = require("../controllers/productController");

///api/products

router.get("/", getProductById);

router.patch("/review/:productId", protect, addReviewToProduct);

router.get("/:id", getProducts);

router.get("/search/page",getSearch);

module.exports = router;
