import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";

import { requireSignIn } from "../middlewares/authmiddleware.js";
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/test", requireSignIn ,testController);

export default router;
