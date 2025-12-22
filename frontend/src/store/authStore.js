import { create } from "zustand";
import api from "../services/api";

const useAuthStore = create((set) => ({
    user: null,
    isLogin: false,
    isRegister: false,
    isCheckingAuth: true,
    error: null,
    checkAuth: async () => {
        try {
            const res = await api.get("/auth/me");
            set({ user: res.data });
        } catch (error) {
            set({ user: null });
        } finally {
            set({ isCheckingAuth: false });
        }
    },
    login: async (data) => {
        set({ isLogin: true, error: null });
        try {
            const res = await api.post("/auth/login", data);
            set({ user: res.data.newUser });
        } catch (error) {
            set({ error: error.response?.data?.message || "Login failed" });
        } finally {
            set({ isLogin: false });
        }
    },
    register: async (data) => {
        set({ isRegister: true, error: null })
        try {
            const res = await api.post("/auth/register", data);
            set({ user: res.data.newUser })
        } catch (error) {
            set({ error: error.response?.data?.message || "Registration failed" });
        } finally {
            set({ isRegister: false })
        }
    },
    logout: async () => {
        try {
            await api.post("/auth/logout");
            set({ user: null });
        } catch (error) {
            set({ error: error.response?.data?.message || "Logout failed" })
        }
    }
}));

export default useAuthStore;