import { supabase } from "./supabase";

export async function fetchPosts() {
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

export async function fetchHotels({ setHotels, setLoading }) {
  const { data, error } = await supabase.from("hotels").select("*");
  if (error) {
    console.error("Error fetching hotels:", error);
    return [];
  }
  setHotels(data);
  setLoading(false);
}

export async function fetchMessages() {
  try {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("date", { ascending: false });
    if (error) {
      throw error;
    }
    console.log("Fetched messages:", data);
    return data;
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
}