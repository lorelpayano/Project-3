const { Schema, model } = require("mongoose");

const itemSchema = new Schema(
  {
    image: String,
    links: [String],
    notes: String,
    supplies: String,
    price: String,
    },
  {
    timestamps: true,
    versionKey: false,
  }
);


module.exports = model("Item", itemSchema);
