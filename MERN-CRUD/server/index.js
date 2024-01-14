import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import route from "./routes/userRoutes.js";

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 7000;

app.use("/api", route);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`listening on port http://localhost:${PORT}`);
});
