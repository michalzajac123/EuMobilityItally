import React from "react";
import { useNavigate } from "react-router-dom";
import { FiHome, FiArrowLeft } from "react-icons/fi";

export function Component() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md text-center">
        <h1 className="text-8xl font-black text-[var(--green-text-color)] mb-4">
          404
        </h1>

        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-600 text-base mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--green-text-color)] text-white font-semibold rounded-lg cursor-pointer hover:shadow-lg transition-all duration-200"
          >
            <FiHome size={20} />
            Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-300 text-gray-900 font-semibold rounded-lg cursor-pointer hover:bg-gray-400 transition-all duration-200"
          >
            <FiArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
