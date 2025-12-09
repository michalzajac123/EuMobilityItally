import { FiSave, FiLock } from "react-icons/fi";
import { useState } from "react";
import {
  checkCurrentPassword,
  updatePassword,
} from "../../../../utils/supabase";

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
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8 space-y-10">
        {/* CONTACT FORM  */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            📧 Contact Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input placeholder="Full Name" className="border p-3 rounded-lg" />
            <input
              type="email"
              placeholder="Email Address"
              className="border p-3 rounded-lg"
            />
            <input
              placeholder="Phone Number"
              className="border p-3 rounded-lg"
            />
            <input
              placeholder="Facebook URL"
              className="border p-3 rounded-lg"
            />
            <input
              placeholder="Instagram URL"
              className="border p-3 rounded-lg"
            />
          </div>

          <button className="mt-6 px-6 bg-[var(--green-text-color)] text-white font-semibold py-3 rounded-lg flex items-center gap-2">
            <FiSave /> Save Contact Information
          </button>
        </div>

        {/* CHANGE PASSWORD */}
        <div className="border-t pt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            🔒 Change Password
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="password"
              placeholder="Current Password"
              name="currentPassword"
              value={passwordForm.currentPassword}
              onChange={handlePasswordChange}
              className="border p-3 rounded-lg"
            />
            <input
              type="password"
              placeholder="New Password"
              name="newPassword"
              value={passwordForm.newPassword}
              onChange={handlePasswordChange}
              className="border p-3 rounded-lg"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              name="confirmNewPassword"
              value={passwordForm.confirmNewPassword}
              onChange={handlePasswordChange}
              className="border p-3 rounded-lg"
            />
          </div>

          <button
            onClick={handlePasswordChangeSubmit}
            className="mt-6 px-6 bg-[var(--green-text-color)] hover:bg-[var(--green-text-hover)] text-white font-semibold py-3 rounded-lg flex items-center gap-2"
          >
            <FiLock /> Update Password
          </button>

          {/* 🔥 estetyczne komunikaty błędów */}
          {validationMsg && (
            <div
              className={`mt-4 p-3 rounded-lg text-sm font-medium w-fit
              ${
                validationMsg.startsWith("✅")
                  ? "bg-green-100 text-green-700 border border-green-300"
                  : "bg-red-100 text-red-700 border border-red-300"
              }`}
            >
              {validationMsg}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
