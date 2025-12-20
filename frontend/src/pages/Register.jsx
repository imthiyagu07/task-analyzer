import useAuthStore from "../store/authStore";
import { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const { register, isRegister, error } = useAuthStore();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        register(formData);
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="max-w-md w-full m-4 p-8 bg-neutral-950 border border-neutral-800 text-white rounded-2xl shadow-2xl">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">Register</h2>
                    <p className="text-neutral-500">Join the smart task revolution</p>
                </div>

                {error && <p className="text-red-500 bg-red-500/10 border border-red-500/20 text-center py-2 rounded-lg mb-6 text-sm font-medium">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 mb-1.5 uppercase tracking-wider">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded-lg outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-neutral-700 font-medium text-white"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-neutral-500 mb-1.5 uppercase tracking-wider">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded-lg outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-neutral-700 font-medium text-white"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-neutral-500 mb-1.5 uppercase tracking-wider">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded-lg outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-neutral-700 font-medium text-white"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* todo: hide and show password */}

                    <button
                        className="w-full py-3.5 mt-2 cursor-pointer bg-white hover:bg-neutral-200 text-black font-bold rounded-lg transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        disabled={isRegister}
                    >
                        {isRegister ? "Creating Account..." : "Register"}
                    </button>
                </form>

                <p className="text-center mt-8 text-neutral-500 text-sm">
                    Already have an account?{" "}
                    <a href="/login" className="text-white hover:underline font-medium transition-colors">
                        Login here
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Register;