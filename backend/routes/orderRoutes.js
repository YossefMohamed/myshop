const express = require("express");

const router = express.Router();
const protect = require("../controllers/authMiddleware");
const { addOrder, getOrder, getAllOrders } = require("../controllers/orderController");

///api/products

router.post("/addOrder", protect, addOrder);
router.get("/:id", protect, getOrder);
router.get("/", protect, getAllOrders);

module.exports = router;
