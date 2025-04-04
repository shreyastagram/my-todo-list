const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  completed: { type: Boolean, default: false },
  assignedTo: { type: String, required: true },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
