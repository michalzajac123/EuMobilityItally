import { createClient } from "@supabase/supabase-js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleNavigateClick } from "./handleNavigateClick";
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

// ---- LOGIN ADMINA ----
export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return { error: error.message };
  return { data };
}

// ---- WYLOGOWANIE ----
export async function logout(navigate) {
  await supabase.auth.signOut();
  handleNavigateClick(navigate, "/admin/login");
}

export function useAuthRedirect({ mustBeLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const logged = !!data.session;
      if (mustBeLoggedIn && !logged) {
        navigate("/admin/login"); // NIEzalogowany → login
      }
      if (!mustBeLoggedIn && logged) {
        navigate("/admin"); // NIEzalogowany → login
      }
    });
  }, [mustBeLoggedIn, navigate]);
}

export async function getAdminData() {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  if (userError || !user)
    return { error: userError?.message || "Brak zalogowanego użytkownika" };

  const { data, error } = await supabase
    .from("admins")
    .select("username, avatar_url")
    .eq("user_id", user.id)
    .single();

  if (error) return { error: error.message };

  return { data };
}

export async function updatePassword(newPassword) {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function checkCurrentPassword(currentPassword) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  if (userError || !user) {
    throw new Error(userError?.message || "Brak zalogowanego użytkownika");
  }
  const { error } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: currentPassword,
  });
  if (error) {
    throw new Error("Current password is incorrect");
  }
  return true;
}