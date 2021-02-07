const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: [
      {
        type: String,
        required: true,
      },
    ],
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numberReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [
      {
        review: {
          type: String,
          required: true,
        },
        rating: { type: Number, required: true },

        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
      {
        timestamp: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

productSchema.pre("save", function (next) {
  let x = 0;

  this.reviews.map((e) => {
    x += e.rating;
  });
  this.rating = x;
  console.log(x);

  next();
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
