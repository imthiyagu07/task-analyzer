import { useState, useEffect } from "react";
import { useTaskStore } from "../store/taskStore";

const TaskForm = ({ isModal = false, onClose }) => {
    const { addTask, updateTask, fetchTasks, taskToEdit, clearTaskToEdit } = useTaskStore();
    const [form, setForm] = useState({
        title: "",
        description: "",
        due_date: "",
        estimated_hours: "",
        importance: 3
    });

    const [error, setError] = useState("");

    useEffect(() => {
        if (isModal && taskToEdit) {
            setForm({
                title: taskToEdit.title,
                description: taskToEdit.description || "",
                due_date: taskToEdit.due_date ? new Date(taskToEdit.due_date).toISOString().split('T')[0] : "",
                estimated_hours: taskToEdit.estimated_hours,
                importance: taskToEdit.importance
            });
        } else if (!isModal) {
            setForm({ title: "", description: "", due_date: "", estimated_hours: "", importance: 3 });
        }
    }, [taskToEdit, isModal]);

    const submit = async (e) => {
        e.preventDefault();

        if (!form.title.trim() || !form.due_date || !form.estimated_hours || form.estimated_hours <= 0 || !form.importance) {
            setError("All fields are required");
            return;
        }

        setError("");

        if (isModal && taskToEdit) {
            await updateTask(taskToEdit._id, form);
            clearTaskToEdit();
            if (onClose) onClose();
        } else {
            await addTask(form);
            setForm({ title: "", description: "", due_date: "", estimated_hours: "", importance: 3 });
        }

        await fetchTasks();
    };


    return (
        <form onSubmit={submit} className={isModal ? "p-6 space-y-4" : "p-6 bg-neutral-950 border border-neutral-800 rounded-xl space-y-4 relative"}>
            {!isModal && (
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="text-white">▪</span> Add New Task
                </h2>
            )}

            {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-lg text-md font-medium text-center">
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1 md:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-1 font-bold">Title *</label>
                    <input
                        className="w-full bg-neutral-900 border border-neutral-800 p-3 rounded-lg focus:border-white outline-none text-white placeholder-neutral-700 transition-all font-medium"
                        placeholder="What needs to be done?"
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                        value={form.title}
                    />
                </div>

                <div className="col-span-1 md:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-1 font-bold">Description</label>
                    <textarea
                        className="w-full bg-neutral-900 border border-neutral-800 p-3 rounded-lg focus:border-white outline-none text-white placeholder-neutral-700 transition-all font-medium min-h-[80px]"
                        placeholder="Add details about your task..."
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                        value={form.description}
                    />
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-1 font-bold">Due Date *</label>
                    <input
                        type="date"
                        className="w-full bg-neutral-900 border border-neutral-800 p-3 rounded-lg focus:border-white outline-none text-white transition-all [&::-webkit-calendar-picker-indicator]:invert"
                        onChange={(e) => setForm({ ...form, due_date: e.target.value })}
                        value={form.due_date}
                    />
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-1 font-bold">Estimated Hours *</label>
                    <input
                        type="number"
                        placeholder="e.g. 2"
                        className="w-full bg-neutral-900 border border-neutral-800 p-3 rounded-lg focus:border-white outline-none text-white placeholder-neutral-700 transition-all font-medium"
                        onChange={(e) =>
                            setForm({ ...form, estimated_hours: e.target.value })
                        }
                        value={form.estimated_hours}
                    />
                </div>

                <div className="col-span-1 md:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-1 font-bold">Importance (1-5) *</label>
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={() => setForm({ ...form, importance: i })}
                                className={`flex-1 p-2 rounded-lg cursor-pointer border transition-all font-medium ${form.importance === i
                                    ? "bg-white border-white text-black shadow-md"
                                    : "bg-neutral-900 border-neutral-800 text-neutral-500 hover:bg-neutral-800 hover:text-neutral-300"
                                    }`}
                            >
                                {i}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <button className="w-full cursor-pointer bg-white hover:bg-neutral-200 text-black font-bold py-3.5 rounded-lg transition-all active:scale-[0.99] mt-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                {isModal ? "Save Changes" : "Analyze & Add Task"}
            </button>
        </form>
    );
};

export default TaskForm;
