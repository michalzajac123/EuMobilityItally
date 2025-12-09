import {
  FiSave,
  FiLock,
  FiUser,
  FiMail,
  FiPhone,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";
import { useState } from "react";
import {
  checkCurrentPassword,
  updatePassword,
} from "../../../../utils/supabase";

import InputField from "../../components/InputField";

export default function SettingView() {
  const [validationMsg, setValidationMsg] = useState(null);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const checkPasswordStrength = (password) => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password)
    );
  };

  const handlePasswordChange = (e) => {
    setPasswordForm({ ...passwordForm, [e.target.name]: e.target.value });
  };

  const handlePasswordChangeSubmit = async () => {
    setValidationMsg("");

    if (passwordForm.newPassword !== passwordForm.confirmNewPassword)
      return setValidationMsg("❗ New passwords do not match");

    if (!checkPasswordStrength(passwordForm.newPassword))
      return setValidationMsg(
        "❗ Password must contain A-Z, a-z, number, special char and 8+ chars"
      );

    try {
      await checkCurrentPassword(passwordForm.currentPassword);
      await updatePassword(passwordForm.newPassword);
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
      setValidationMsg("✅ Password updated successfully!");
    } catch (err) {
      setValidationMsg("❗ " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* CONTACT FORM  */}
          <div className="p-8 sm:p-10 border-b border-gray-200">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <span className="text-2xl">📧</span>
                Contact Information
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Update your personal data
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputField
                icon={FiUser}
                label="Full Name"
                placeholder="John Doe"
              />
              <InputField
                icon={FiMail}
                label="Email Address"
                type="email"
                placeholder="john@example.com"
              />
              <InputField
                icon={FiPhone}
                label="Phone Number"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <button className="mt-8 cursor-pointer px-8 bg-[var(--green-text-color)] hover:bg-[var(--green-text-hover)] text-white font-semibold py-3 rounded-lg flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg">
              <FiSave size={20} /> Save Contact Information
            </button>
          </div>

          {/* CHANGE PASSWORD */}
          <div className="p-8 sm:p-10">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <span className="text-2xl">🔒</span>
                Change Password
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Ensure your account is secure with a strong password
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="sm:col-span-2">
                <InputField
                  icon={FiLock}
                  label="Current Password"
                  type="password"
                  placeholder="Enter your current password"
                  name="currentPassword"
                  value={passwordForm.currentPassword}
                  onChange={handlePasswordChange}
                />
              </div>
              <InputField
                icon={FiLock}
                label="New Password"
                type="password"
                placeholder="Create a strong password"
                name="newPassword"
                value={passwordForm.newPassword}
                onChange={handlePasswordChange}
              />
              <InputField
                icon={FiLock}
                label="Confirm New Password"
                type="password"
                placeholder="Re-enter your new password"
                name="confirmNewPassword"
                value={passwordForm.confirmNewPassword}
                onChange={handlePasswordChange}
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <p className="text-sm text-blue-800">
                <strong>Password Requirements:</strong> At least 8 characters,
                one uppercase letter, one lowercase letter, one number, and one
                special character.
              </p>
            </div>

            <button
              onClick={handlePasswordChangeSubmit}
              className="px-8 bg-[var(--green-text-color)] cursor-pointer hover:bg-[var(--green-text-hover)] text-white font-semibold py-3 rounded-lg flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <FiLock size={20} /> Update Password
            </button>

            {/* Validation Messages */}
            {validationMsg && (
              <div
                className={`mt-6 p-4 rounded-lg font-medium flex items-center gap-3 animate-fadeIn
                ${
                  validationMsg.startsWith("✅")
                    ? "bg-green-50 text-green-800 border border-green-300"
                    : "bg-red-50 text-red-800 border border-red-300"
                }`}
              >
                <span className="text-lg">{validationMsg.charAt(0)}</span>
                <span>{validationMsg.slice(1)}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
