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

export async function fetchTestimonials({ setTestimonials, setLoading }) {
  const { data, error } = await supabase.from("testimonials").select("*");
  if (error) {
    console.error("Error fetching testimationals:", error);
    return [];
  }
  setTestimonials(data);
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
export async function deletePost(postId) {
  try {
    if (await checkAuth() === null) {
      throw new Error("User is not authenticated");
    }
    const { error } = await supabase.from("posts").delete().eq("id", postId);
    if (error) {
      throw error;
    }
    console.log(`Post with ID ${postId} deleted successfully.`);
  } catch (error) {
    console.error("Error deleting post:", error);
  }
}
export async function updatePost(postId, updatedData) {
  try {
    if (await checkAuth() === null) {
      throw new Error("User is not authenticated");
    }
    await supabase
      .from("posts")
      .update({ body: updatedData.body, title: updatedData.title })
      .eq("id", postId);
  } catch (error) {
    console.error("Error updating post:", error);
  }
}
export async function sendMessage(messageData) {
  const sender_name = messageData.name
  const sender_email = messageData.email 
  const content = messageData.content 
  const subject = messageData.subject
  try {
    const { error } = await supabase.from("messages").insert({
      sender_name,
      sender_email,
      content,
      subject,
      date: new Date().toISOString(),
    });
    if (error) {
      throw error;
    }
    console.log("Message sent successfully:", messageData);
  } catch (error) {
    console.error("Error sending message:", error);
  }
}
async function checkAuth() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) {
    console.error("Error fetching user:", error);
    return null;
  }
  return user;
}
