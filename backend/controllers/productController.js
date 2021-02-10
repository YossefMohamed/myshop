const handler = require("express-async-handler");

const Product = require("../models/productModel");

exports.getProducts = handler(async (req, res) => {
  const product = await Product.findById(req.params.id).populate({
    path: "reviews.user",
    select: "name img",
  });
  console.log("NO");
  console.log("NO");
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found !");
  }
});

exports.getProductById = handler(async (req, res) => {

const PAGE_SIZE =20
const total = await Product.countDocuments({})
  const products = await Product.find().limit(PAGE_SIZE).skip(req.query.page * PAGE_SIZE);
 res.json({
  totalPages : total,
  products
 })
 
});


exports.getSearch = handler(async (req, res) => {
  // console.log("asd")
  var replace = req.query.page;
  // console.log(replace)
  var re = new RegExp(replace,"i");
  const products = await Product.find({"name" : re})
  res.json(products)

});

exports.addReviewToProduct = handler(async (req, res) => {
  // console.log("Yes");
  const product = await Product.findById(req.params.productId);

  product.numberReviews++;
  product.reviews.push({
    user: req.user._id,
    review: req.body.userReview,
    rating: req.body.rating,
  });
  // console.log(product);
  // console.log("Yes");
  const productEdited = await product.save();
  // console.log("Yes");
  console.table(productEdited);
  res.status(200);
  // console.log("Yes");
  res.send("ok");
});
