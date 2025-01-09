const mongoose=require('mongoose');
const personSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    work: { type: String, enum: ["engineer", "chef", "writer"], required: true },
    mobile: { type: String },
    Email: { type: String, unique: true, sparse: true },
    address: { type: String },
    salary: { type: Number },
  });
  const person = mongoose.model("person", personSchema);
  module.exports = person;
  