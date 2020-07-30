const { Schema, model } = require("mongoose");

const itemSchema = new Schema(
  {
    image: String,
    links: [String],
    notes: String,
    supplies: [Object],
    price: String,
    board: {type: Schema.Types.ObjectId, ref:'Board'}
    },
  {
    timestamps: true,
    versionKey: false,
  }
);


module.exports = model("Item", itemSchema);
