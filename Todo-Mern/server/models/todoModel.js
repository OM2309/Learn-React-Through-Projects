import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    completed: {
      type: Boolean,
      default: false, 
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model('Todo', todoSchema);
export default Todo;
