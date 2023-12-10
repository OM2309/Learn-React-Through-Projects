import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";

import requireSignIn from "../middlewares/authmiddleware.js";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/test", requireSignIn, testController);

// Error handling middleware
router.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({
    success: false,
    message: "Something went wrong on the server",
    error: err.message,
  });
});

export default router;
