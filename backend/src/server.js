import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors({origin: process.env.FRONTEND_URL, credentials: true}));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello from the server!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));