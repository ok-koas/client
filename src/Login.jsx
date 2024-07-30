import React, { useState } from "react";
import { FaGoogle, FaUser, FaLock, FaSignInAlt } from "react-icons/fa"; // Import ikon dari react-icons
import icon from './assets/logo.png'; // Import gambar

const Login = () => {
  const [errors, setErrors] = useState({});

  const validateForm = (event) => {
    event.preventDefault();
    const formErrors = {};

    const fields = ["username", "password"];
    fields.forEach((field) => {
      const value = event.target[field].value.trim();
      if (!value) {
        formErrors[field] = "Field is required";
      }
    });

    setErrors(formErrors);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-20 mt-10">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto">
          <div className="text-center mb-6">
            <img src={icon} alt="Login" className="w-48 h-auto mx-auto" /> {/* Ganti teks dengan gambar */}
          </div>
          <form onSubmit={validateForm}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <div className="flex items-center border rounded-md">
                <FaUser className="text-gray-500 mx-3" />
                <input
                  type="text"
                  name="username"
                  id="username"
                  className={`flex-1 px-3 py-1.5 text-gray-900 border-0 focus:ring-2 focus:ring-indigo-600 ${
                    errors.username ? "border-red-500" : ""
                  }`}
                  placeholder="muhammad.subardjo"
                  required
                />
              </div>
              {errors.username && (
                <p className="text-red-500 text-xs italic">{errors.username}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="flex items-center border rounded-md">
                <FaLock className="text-gray-500 mx-3" />
                <input
                  name="password"
                  type="password"
                  id="password"
                  className={`flex-1 px-3 py-1.5 text-gray-900 border-0 focus:ring-2 focus:ring-indigo-600 ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  placeholder="Password"
                  required
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs italic">{errors.password}</p>
              )}
            </div>
            <div className="text-center mt-4">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                <FaSignInAlt className="text-lg" />
                Login
              </button>
            </div>
            <div className="text-center mt-4">
              <span className="text-gray-600">Atau</span>
            </div>
            {/*<div className="text-center mt-2">
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                <FaGoogle className="text-lg" />
                Login with Google
              </button>
            </div>*/}
            <div className="flex items-center justify-center mt-4">
              <span className="text-gray-600">Belum mempunyai akun?</span>
              <a
                href="/register"
                className="text-red-500 hover:text-red-700 ml-2 flex items-center"
              >
                Daftar Sekarang
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
