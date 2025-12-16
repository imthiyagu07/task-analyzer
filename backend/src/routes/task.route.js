import express from "express";
import { createTask, getAllTasks, getTaskById, updateTask, deleteTask } from "../controllers/task.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.use(protectRoute);

router.post("/create", createTask);
router.get("/all", getAllTasks);
router.get("/get/:id", getTaskById);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

export default router;