import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import React from "react";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          Login to <span className="text-blue-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Link
            to="/signup"
            className="block text-sm text-blue-400 hover:text-blue-300 hover:underline transition"
          >
            Don't have an account? Sign up
          </Link>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg transition font-medium"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
