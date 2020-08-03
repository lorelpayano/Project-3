const { Schema, model } = require("mongoose");

const projectSchema = new Schema(
  {
    name: String, //displayed on HEADING
    budget: String, // displayed on HEADING
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    // list: [{type: Schema.Types.ObjectId, ref:'Item'}],
    status: {type: String, enum:['Completed', 'Ongoing', "Not Started"]},
    images: [String], // all the images of the project 
    links: [String], //links from websites where user is purchasing from
    notes: String, //notes related to project planning
    supplies: [Object], //supplies / items / materials / tools
    price: String, // price per item/set
    // board: {type: Schema.Types.ObjectId, ref:'Board'}
    },
  {
    timestamps: true,
    versionKey: false,
  }
);


module.exports = model("Project", projectSchema);
