// Application Imports
import express from "express";
import connectDB from "./config/db.js";
import todoRouter from "./routes/todoRoutes.js";
import bodyParser from "body-parser";
import cors from 'cors'
// Constants
const app = express();
const PORT = 4444;

// Middlewaren and Config handlers
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// Routes Middleware
app.use("/api/v1", todoRouter);

// Application Config handler
app.listen(PORT, async (req, res) => {
  await connectDB();
  console.log(`listening on port http://localhost:${PORT}`);
});
