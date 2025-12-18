import Task from "../models/Task.model.js";
import { priorityAlgo } from "../utils/priorityAlgo.js";

export const createTask = async (req, res) => {
    try {
        const { title, description, due_date, estimated_hours, importance } = req.body;
        if (!title || !due_date || estimated_hours === undefined || importance === undefined) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const priority_score = priorityAlgo(due_date, estimated_hours, importance)
        const task = await Task.create({ userId: req.user._id, title, description, due_date, estimated_hours, importance, priorityScore: priority_score });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user._id }).sort({ priorityScore: -1 });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOne({ _id: id, userId: req.user._id });
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOne({ _id: id, userId: req.user._id });
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        const { title, description, due_date, estimated_hours, importance, status } = req.body;

        const shouldRecalculatePriority =
            due_date !== undefined ||
            estimated_hours !== undefined ||
            importance !== undefined;

        if (shouldRecalculatePriority) {
            const newDueDate = due_date ?? task.due_date;
            const newEstimatedHours = estimated_hours ?? task.estimated_hours;
            const newImportance = importance ?? task.importance;

            task.priorityScore = priorityAlgo(
                newDueDate,
                newEstimatedHours,
                newImportance
            );
        }

        if (title !== undefined) task.title = title;
        if (description !== undefined) task.description = description;
        if (due_date !== undefined) task.due_date = due_date;
        if (estimated_hours !== undefined) task.estimated_hours = estimated_hours;
        if (importance !== undefined) task.importance = importance;
        if (status !== undefined) task.status = status;

        await task.save();
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await Task.findOneAndDelete({ _id: id, userId: req.user._id });
        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}