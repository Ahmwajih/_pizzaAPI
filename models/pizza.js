const mongoose = require("mongoose");

const Topping = require("./topping");
const pizzaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      validate: {
        validator: Number.isInteger,
        message: "{VALUE} is not an integer value",
      },
    },
    toppings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topping",
        required: true,
      },
    ],
  },
  { collection: "pizzas", timestamps: true }
);

const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = Pizza;