import { useTaskStore } from "../store/taskStore";

const TaskCard = ({ task, isTop }) => {
    const { setTaskToEdit, setTaskToDelete, updateTask, fetchTasks } = useTaskStore();

    const handleToggleStatus = async () => {
        const newStatus = task.status === "completed" ? "pending" : "completed";
        await updateTask(task._id, { status: newStatus });
        await fetchTasks();
    }

    const getStatusStyles = () => {
        if (task.status === "completed") {
            return {
                container: "border-neutral-800 bg-neutral-900/10 opacity-60",
                text: "text-neutral-600",
                badge: "bg-neutral-800 text-neutral-500 border-neutral-700",
                label: "COMPLETED",
                message: null
            };
        }

        const today = new Date();
        const due = new Date(task.due_date);
        const diffDays = Math.ceil((due - today) / (1000 * 60 * 60 * 24));

        if (diffDays < -3) {
            return {
                container: "border-red-600 bg-red-950/20",
                text: "text-red-500",
                badge: "bg-red-600/20 text-red-500 border-red-600/50",
                label: "CRITICAL OVERDUE",
                message: "This Task is significantly delayed!"
            };
        } else if (diffDays < 0) {
            return {
                container: "border-red-500 bg-red-950/10",
                text: "text-red-400",
                badge: "bg-red-500/20 text-red-400 border-red-500/50",
                label: "OVERDUE",
                message: null
            };
        } else if (diffDays === 0 || diffDays === 1) {
            return {
                container: "border-yellow-500 bg-yellow-950/10",
                text: "text-yellow-400",
                badge: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
                label: diffDays === 0 ? "DUE TODAY" : "DUE TOMORROW",
                message: null
            };
        } else {
            return {
                container: "border-green-600 bg-green-950/10",
                text: "text-green-400",
                badge: "bg-green-600/20 text-green-400 border-green-600/50",
                label: "SAFE",
                message: null
            };
        }
    };

    const status = getStatusStyles();

    return (
        <div className={`relative group border rounded-xl p-5 transition-all duration-300 ${status.container} ${isTop ? "shadow-[0_0_20px_rgba(255,255,255,0.05)] scale-[1.01]" : ""}`}>
            {isTop && task.status !== 'completed' && (
                <div className={`absolute -top-3 left-4 text-[10px] font-black tracking-widest px-3 py-1 rounded-full border ${status.badge} backdrop-blur-md`}>
                    HIGHEST PRIORITY
                </div>
            )}

            <div className="absolute bottom-5 right-5 flex gap-2">
                <button
                    onClick={handleToggleStatus}
                    className={`p-2 rounded-lg transition-colors cursor-pointer border ${task.status === 'completed' ? 'bg-green-600/20 border-green-600 text-green-500 hover:bg-green-600 hover:text-white' : 'bg-neutral-800 border-neutral-700 text-neutral-400 hover:bg-green-600 hover:border-green-600 hover:text-white'}`}
                    title={task.status === 'completed' ? "Mark as Pending" : "Mark as Completed"}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </button>
                <button
                    onClick={() => setTaskToEdit(task)}
                    className="p-2 bg-neutral-800 hover:bg-white hover:text-black text-neutral-400 rounded-lg transition-colors cursor-pointer border border-neutral-700"
                    title="Edit Task"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                </button>
                <button
                    onClick={() => setTaskToDelete(task)}
                    className="p-2 bg-neutral-800 hover:bg-red-600 hover:text-white text-neutral-400 rounded-lg transition-colors cursor-pointer border border-neutral-700"
                    title="Delete Task"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                </button>
            </div>

            <div className="flex justify-between items-start gap-4">
                <div>
                    <h3 className="text-lg font-bold leading-tight text-white pr-20">{task.title}</h3>
                    <div className="flex items-center gap-2 mt-1.5">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${status.badge}`}>
                            {status.label}
                        </span>
                        <p className="text-sm text-neutral-400 font-medium">
                            Due: {new Date(task.due_date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
                        </p>
                    </div>
                    {status.message && (
                        <p className="text-xs font-bold text-red-500 mt-2 animate-pulse">
                            {status.message}
                        </p>
                    )}
                    {task.description && (
                        <p className="text-sm text-neutral-400 mt-2 line-clamp-2 leading-relaxed font-light">
                            {task.description}
                        </p>
                    )}
                </div>

                <div className="flex flex-col items-end">
                    <div className={`text-3xl font-black ${status.text}`}>
                        {task.priorityScore}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-600 font-bold">Priority</div>
                </div>
            </div>

            <div className="mt-5 flex gap-2">
                <div className="flex gap-1 items-center text-xs px-2 py-1 rounded bg-neutral-900 text-neutral-400 border border-neutral-800 font-semibold tracking-wide">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-icon lucide-clock"><path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="10" /></svg>
                    {task.estimated_hours}H
                </div>
                <div className="text-xs px-2.5 py-1 rounded bg-neutral-900 text-neutral-400 border border-neutral-800 font-semibold tracking-wide">
                    IMP: {task.importance}/5
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
