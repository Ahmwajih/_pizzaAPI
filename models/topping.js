const { mongoose } = require("mongoose");

const toppingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
  },
  { collection: "Toppings", timestamps: true }
);

const Topping = mongoose.model("Topping", toppingSchema);

module.exports = Topping;
