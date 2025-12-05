import React, { useState } from "react";
import { FiMail, FiKey, FiEye, FiEyeOff } from "react-icons/fi";
import { login } from "../../../utils/supabase.js";
import { handleNavigateClick } from "../../../utils/handleNavigateClick.jsx"; // <- dopasuj ścieżkę importu
import { useNavigate } from "react-router-dom";
import LoginInput from "./LoginInput.jsx";
import { useAuthRedirect } from "../../../utils/supabase.js";
export function Component() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  useAuthRedirect({ mustBeLoggedIn: false });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await login(email, password);

    if (res.error) {
      setMsg("❌ " + res.error);
    } else {
      handleNavigateClick(navigate, "/admin");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[var(--green-text-color)] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-12">
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Welcome Back
            </h2>
            <p className="text-gray-600 text-lg">
              Please enter your credentials to continue
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
            <LoginInput
              inputType="email"
              placeholder="your.email@company.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            {/* Password */}
            <LoginInput
              inputType={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />

            {/* Submit */}
            <button
              type="submit"
              className="w-full cursor-pointer py-4 bg-[var(--green-text-color)] hover:bg-[var(--green-text-hover)] text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-4"
            >
              Sign In
            </button>

            {msg && <p className="text-center font-semibold pt-2">{msg}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
