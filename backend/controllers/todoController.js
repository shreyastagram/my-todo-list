const Todo = require("../models/ToDo");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: "Error fetching todos" });
  }
};

const getTodoById = async (req, res) => {
  try {
    const task = await Todo.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: "Error fetching task" });
  }
};

const createTodo = async (req, res) => {
  try {
    const { task, assignedTo } = req.body;
    if (!task || !assignedTo) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newTodo = new Todo({ task, assignedTo });
    await newTodo.save();

    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ message: "Error adding task. Please try again" });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { task, assignedTo, completed } = req.body;
    const updatedTask = await Todo.findByIdAndUpdate(
      req.params.id,
      { task, assignedTo, completed },
      { new: true }
    );
    if (!updatedTask)
      return res.status(404).json({ message: "Task not found" });
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ message: "Error updating task" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting task" });
  }
};

module.exports = { getTodos, getTodoById, createTodo, updateTodo, deleteTodo };
