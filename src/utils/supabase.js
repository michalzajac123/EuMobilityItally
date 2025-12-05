import { createClient } from "@supabase/supabase-js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
export async function logout() {
  await supabase.auth.signOut();
}

export function useAuthRedirect({mustBeLoggedIn }){
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({data}) => {
      const logged = !!data.session
      if (mustBeLoggedIn && !logged) {
        navigate("/admin/login"); // NIEzalogowany → login
      }
      if (!mustBeLoggedIn && logged) {
        navigate("/admin"); // NIEzalogowany → login
      }
    })
  },[mustBeLoggedIn, navigate])
}

export async function getAdminData() {
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) return { error: userError?.message || "Brak zalogowanego użytkownika" };

  const { data, error } = await supabase
    .from('admins')
    .select('username, avatar_url')
    .eq('user_id', user.id)
    .single(); 

  if (error) return { error: error.message };

  return { data };
}
