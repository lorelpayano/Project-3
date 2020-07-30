const { Schema, model } = require("mongoose");
// const PLM = require("passport-local-mongoose");

const projectSchema = new Schema(
  {
    boardName: String,
    budget: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    list: [{type: Schema.Types.ObjectId, ref:'Item'}],
    status: {type: String, enum:['Completed', 'Ongoing', "Not Started"]}
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


module.exports = model("Project", projectSchema);

//board name, inspo-image(upload), supplies, cost
//file upload cloundinary