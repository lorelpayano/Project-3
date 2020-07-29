const { Schema, model } = require("mongoose");
const PLM = require("passport-local-mongoose");
const userSchema = new Schema(
  {
    email: String,
    name: String,
    googleId: String,
    imageUrl: String,
    projects: [{type: Schema.Types.ObjectId, ref:'Project'}]
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
userSchema.plugin(PLM, { usernameField: "email" });
module.exports = model("User", userSchema);