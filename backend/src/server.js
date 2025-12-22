import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import authRoutes from "../src/routes/auth.route.js";
import taskRoutes from "../src/routes/task.route.js";

const app = express();
app.set("trust proxy", 1);
dotenv.config();

connectDB();

app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello from the server!");
});

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));