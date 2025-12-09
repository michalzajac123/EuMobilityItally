import React from "react";
import { logout } from "../../../../../utils/supabase.js";
import { useNavigate } from "react-router-dom";

export default function LogoutBtn() {
  const navigate = useNavigate();
  return (
    <div className="mx-auto flex justify-center p-4 items-end w-full h-full overflow-y-auto">
      <button
        onClick={() => logout(navigate)}
        className="bg-[var(--green-text-color)] p-2 rounded w-full hover:bg-[var(--green-text-hover)] transition-colors duration-300 text-white font-medium cursor-pointer"
      >
        Sign Out
      </button>
    </div>
  );
}
