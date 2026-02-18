import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Login Submitted");
  };

  return (
    <div className="pt-[100px] flex justify-center px-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 mt-20  mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              name="password"
              required
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
            />
          </div>

          <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-500">
          Don’t have an account?{" "}
          <span className="text-black cursor-pointer">Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
