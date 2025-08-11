import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import GenderCheckbox from "../../components/common/GenderCheckbox";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-8">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          Sign Up <span className="text-blue-500">ChatApp</span>
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
              required
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              required
            />
          </div>

          {/* Gender */}
          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          {/* Already have account */}
          <Link
            to="/login"
            className="block text-sm text-blue-400 hover:text-blue-300 hover:underline transition"
          >
            Already have an account? Login
          </Link>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg transition font-medium disabled:opacity-50"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
