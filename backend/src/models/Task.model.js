import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true},
    title: {type: String, required: true, trim: true},
    description: {type: String, trim: true},
    due_date: {type: Date, required: true},
    estimated_hours: {type: Number, required: true, min: 0},
    importance: {type: Number, required: true, min: 1, max: 5},
    status: {type: String, enum: ["pending", "completed"], default: "pending"},
}, {timestamps: true});

const Task = mongoose.model("Task", taskSchema);

export default Task;