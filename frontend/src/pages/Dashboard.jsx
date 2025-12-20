import { useEffect, useState } from "react";
import { useTaskStore } from "../store/taskStore";
import useAuthStore from "../store/authStore";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import Modal from "../components/Modal";

const Dashboard = () => {
    const {
        tasks,
        fetchTasks,
        loading,
        isEditModalOpen,
        closeEditModal,
        isDeleteModalOpen,
        taskToDelete,
        deleteTask,
        clearTaskToDelete
    } = useTaskStore();

    useEffect(() => {
        fetchTasks();
    }, []);

    const confirmDelete = async () => {
        if (taskToDelete) {
            await deleteTask(taskToDelete._id);
            await fetchTasks();
            clearTaskToDelete();
        }
    }

    const [activeTab, setActiveTab] = useState("all");

    const filteredTasks = tasks.map(task => {
        const today = new Date();
        const due = new Date(task.due_date);
        const diffDays = Math.ceil((due - today) / (1000 * 60 * 60 * 24));

        return { ...task, diffDays };
    }).filter(task => {
        if (activeTab === "completed") return task.status === "completed";
        if (task.status === "completed") return false;

        if (activeTab === "all") return true;
        if (activeTab === "today") return task.diffDays === 0;
        if (activeTab === "tomorrow") return task.diffDays === 1;
        if (activeTab === "overdue") return task.diffDays < 0;
        if (activeTab === "safe") return task.diffDays > 1;
        return true;
    });

    const { user, logout } = useAuthStore();

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-8 pb-20 relative">
            <header className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-black tracking-tight text-white uppercase">Smart Task Analyzer</h1>
                    <p className="text-neutral-500 mt-1 text-sm tracking-wide font-medium">Algorithm-Powered Priority Management</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-full pl-1 pr-4 py-1">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold text-sm">
                            {user?.name?.charAt(0).toUpperCase() || "U"}
                        </div>
                        <span className="text-sm font-medium text-neutral-300">
                            {user?.name || "User"}
                        </span>
                    </div>
                    <button
                        onClick={logout}
                        className="p-2 text-neutral-500 hover:text-white hover:bg-neutral-800 rounded-full transition-all cursor-pointer"
                        title="Logout"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>
                    </button>
                </div>
            </header>

            <TaskForm />

            {loading && (
                <div className="py-10 text-center">
                    <p className="text-neutral-500 animate-pulse font-medium">Analyzing tasks logic...</p>
                </div>
            )}

            <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-7">
                    <div className="flex items-center gap-4">
                        <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest whitespace-nowrap">Your Task Queue</h2>
                        <div className="h-px w-full bg-neutral-800"></div>
                    </div>

                    <div className="flex gap-1 bg-neutral-900/50 p-1 rounded-lg border border-neutral-800 overflow-x-auto">
                        {[
                            { id: "all", label: "All Pending" },
                            { id: "today", label: "Due Today" },
                            { id: "tomorrow", label: "Tomorrow" },
                            { id: "overdue", label: "Overdue" },
                            { id: "safe", label: "Safe" },
                            { id: "completed", label: "Completed" }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all whitespace-nowrap ${activeTab === tab.id
                                    ? "bg-white text-black shadow-sm"
                                    : "text-neutral-500 hover:text-white hover:bg-neutral-800"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {filteredTasks.length === 0 && !loading && (
                    <div className="text-center py-12 text-neutral-600 bg-neutral-900/30 rounded-xl border border-neutral-800 border-dashed">
                        <p>{activeTab === 'completed' ? "No completed tasks yet." : "No tasks found for this filter."}</p>
                    </div>
                )}
                {filteredTasks.map((task, index) => (
                    <TaskCard
                        key={task._id}
                        task={task}
                        isTop={index === 0 && activeTab !== 'completed'} // Only highlight top task if not in completed tab? Or keep it? Keeping it but maybe top priority implies pending.
                    />
                ))}
            </div>

            {/* Edit Modal */}
            <Modal
                isOpen={isEditModalOpen}
                onClose={closeEditModal}
                title="Update Task"
            >
                <TaskForm isModal={true} onClose={closeEditModal} />
            </Modal>

            {/* Delete Confirmation Modal */}
            <Modal
                isOpen={isDeleteModalOpen}
                onClose={clearTaskToDelete}
                title="Delete Task"
            >
                <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Are you sure?</h3>
                    <p className="text-neutral-400 mb-6 font-medium">
                        This will permanently delete the task
                        <span className="text-white font-bold block mt-1">"{taskToDelete?.title}"</span>
                    </p>
                    <div className="flex gap-3 justify-center">
                        <button
                            onClick={clearTaskToDelete}
                            className="px-5 py-2.5 cursor-pointer rounded-lg border border-neutral-700 text-neutral-300 font-bold hover:bg-neutral-800 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={confirmDelete}
                            className="px-5 py-2.5 cursor-pointer rounded-lg bg-red-600 text-white font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20"
                        >
                            Yes, Delete It
                        </button>
                    </div>
                </div>
            </Modal>

        </div>
    );
};

export default Dashboard;
