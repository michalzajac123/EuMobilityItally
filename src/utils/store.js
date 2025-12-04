import { supabase } from "./supabase";

export default async function fetchPosts() {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      throw error;
    }
    console.log("Fetched posts:", data);
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}
<<<<<<< HEAD

export async function fetchHotels({ setHotels, setLoading }) {
  const { data, error } = await supabase.from("hotels").select("*");
  if (error) {
    console.error("Error fetching hotels:", error);
    return [];
  }
  setHotels(data);
  setLoading(false);
}
=======
>>>>>>> 83b789981c212cf5b4c8b821c5f7d534da9300a0
