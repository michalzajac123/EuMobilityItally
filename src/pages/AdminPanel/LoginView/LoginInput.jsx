import { FiMail, FiKey, FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginInput({
  inputType,
  placeholder,
  onChange,
  value,
  showPassword,
  setShowPassword,
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {inputType === "email" ? "Email Address" : "Password"}
      </label>
      <div className="relative">
        {inputType === "email" ? (
          <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        ) : (
          <FiKey className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        )}
        <input
          type={showPassword && inputType === "password" ? "text" : inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[var(--green-text-color)] focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
        />
        {inputType === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        )}
      </div>
    </div>
  );
}
