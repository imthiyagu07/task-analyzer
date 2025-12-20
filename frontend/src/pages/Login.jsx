import useAuthStore from "../store/authStore";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLogin, error } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-md w-full m-4 p-8 bg-neutral-950 border border-neutral-800 text-white rounded-2xl shadow-2xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-neutral-500">Login to access your smart tasks</p>
        </div>

        {error && <p className="text-red-500 bg-red-500/10 border border-red-500/20 text-center py-2 rounded-lg mb-6 text-sm font-medium">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-neutral-500 mb-2 uppercase tracking-wider">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded-lg outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-neutral-700 font-medium text-white"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-500 mb-2 uppercase tracking-wider">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded-lg outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-neutral-700 font-medium text-white"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
          {/* todo: hide and show password */}

          <button
            className="w-full py-3.5 bg-white cursor-pointer hover:bg-neutral-200 text-black font-bold rounded-lg transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            disabled={isLogin}
          >
            {isLogin ? "Authenticating..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-8 text-neutral-500 text-sm">
          Don’t have an account?{" "}
          <a href="/register" className="text-white hover:underline font-medium transition-colors">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
