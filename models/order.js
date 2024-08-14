const mongoose = require("mongoose");

const User = require("./user");
const Pizza = require("./pizza");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    pizzaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pizza",
      required: true,
    },
    size: {
      type: String,
      enum: ["small", "medium", "large"],
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["ordered", "baked", "delivered"],
      default: "ordered",
    },
  },
  { collection: "orders", timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;