import express from "express";
import { allTodo, todoRegister, todoDelete,  todoUpdate } from "../controllers/todoController.js";
const router = express.Router();

router.get("/", allTodo);
router.post("/todo-register",todoRegister);
router.put("/todo-update/:id", todoUpdate);
router.delete("/todo-delete/:id", todoDelete);

export default router;
