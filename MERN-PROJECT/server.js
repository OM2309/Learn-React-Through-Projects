import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from 'body-parser'
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/api/v1/auth", authRoutes);

const port = process.env.PORT || 3000;
dotenv.config();

app.get("/", (req, res) => {
  res.json({
    status: "success",
  });
});

app.listen(port, async () => {
  await connectDB();
  console.log(
    `Server listening on ${process.env.DEV_MODE} mode on port http://localhost:${port}`
  );
});
