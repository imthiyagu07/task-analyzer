import { create } from "zustand";
import api from "../services/api";

export const useTaskStore = create((set) => ({
    tasks: [],
    loading: false,

    fetchTasks: async () => {
        set({ loading: true });
        try {
            const res = await api.get("/tasks/all");
            set({ tasks: res.data });
        } catch (error) {
            console.error(error);
        } finally {
            set({ loading: false });
        }
    },

    addTask: async (taskData) => {
        await api.post("/tasks/create", taskData);
    },

    updateTask: async (id, taskData) => {
        await api.put(`/tasks/update/${id}`, taskData);
    },

    deleteTask: async (id) => {
        await api.delete(`/tasks/delete/${id}`);
    },

    taskToEdit: null,
    isEditModalOpen: false,

    setTaskToEdit: (task) => set({ taskToEdit: task, isEditModalOpen: true }),
    clearTaskToEdit: () => set({ taskToEdit: null, isEditModalOpen: false }),
    closeEditModal: () => set({ isEditModalOpen: false, taskToEdit: null }),

    taskToDelete: null,
    isDeleteModalOpen: false,

    setTaskToDelete: (task) => set({ taskToDelete: task, isDeleteModalOpen: true }),
    clearTaskToDelete: () => set({ taskToDelete: null, isDeleteModalOpen: false }),
}));