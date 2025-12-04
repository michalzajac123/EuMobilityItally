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
