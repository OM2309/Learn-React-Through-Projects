import todoModel from "../models/todoModel.js";

const allTodo = async (req, res) => {
  try {
    const todos = await todoModel.find({});
    res.json({ todos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const todoRegister = async (req, res) => {
  const { title, description, completed } = req.body;
  try {
    if (!title || !description || completed === undefined) {
      throw new Error("Required fields are missing");
    }

    const existingTodo = await todoModel.findOne({ title });
    if (existingTodo) {
      throw new Error("Title is already defined");
    }

    const todo = new todoModel({
      title,
      description,
      completed,
    });

    await todo.save();
    res.status(201).json({ message: "Todo created successfully", todo });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const todoUpdate = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  try {
    const existingTodo = await todoModel.findById(id);
    if (!existingTodo) {
      throw new Error("Todo not found");
    }

    existingTodo.title = title || existingTodo.title;
    existingTodo.description = description || existingTodo.description;
    existingTodo.completed = completed !== undefined ? completed : existingTodo.completed;

    await existingTodo.save();
    res.json({ message: "Todo updated successfully", todo: existingTodo });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const todoDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await todoModel.findByIdAndDelete(id);
    if (!deletedTodo) {
      throw new Error("Todo not found");
    }
    res.json({ message: "Todo deleted successfully", deletedTodo });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { allTodo, todoRegister, todoDelete, todoUpdate };
