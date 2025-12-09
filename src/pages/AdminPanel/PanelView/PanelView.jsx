import { useState, useEffect } from "react";
import {fetchPosts, fetchMessages, updatePost, deletePost} from "../../../utils/store";
import EditArticleView from "./EditPanelView/EditArticleView.jsx";
import { useAuthRedirect, getAdminData } from "../../../utils/supabase.js";
import SideBarView from "./SideBarView/SideBarView.jsx";
import MessagesView from "./EditPanelView/MessagesView.jsx";

function PanelView() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [activeSection, setActiveSection] = useState("posts");
  const [messages, setMessages] = useState([
    {
      id: 1,
      senderName: "John Doe",
      senderEmail: "emmadajo58@gmail.com",
      content:
        "Hello, I would like to know more about your services. Please get back to me at your earliest convenience. Thank you!",
      date: "2024-06-15",
    },
  ]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useAuthRedirect({ mustBeLoggedIn: true });

  useEffect(() => {
    async function loadData() {
      const postsData = await fetchPosts();
      const messagesData = await fetchMessages(); // Assuming fetchMessages is defined elsewhere
      setPosts(postsData || []);
      setMessages(messagesData || []);
      setPosts(postsData || []);
    }
    loadData()

    getAdminData().then((res) => {
      console.log("dsa");
      if (res.data) setAdmin(res.data);
      else console.log("No admin data found");
    });
  }, []);

  const handleSave = async () => {
    if (!selectedPost) return;
    console.log(selectedPost.id)
    try {
      console.log("Updating post with data:", {
        title: selectedPost.title,
        body: selectedPost.body,
      });
      await updatePost(selectedPost.id, {
        title: selectedPost.title,
        body: selectedPost.body,
      });
      // Update the local posts state
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === selectedPost.id ? { ...post, ...selectedPost } : post
        )
      );
      alert("Post updated successfully!");
    } catch (error) {
      console.error("Error updating post:", error);
      alert("Failed to update the post. Please try again.");
    }
  }
  const handleDelete = async () => {
    if(!selectedPost) return;
    const postId = selectedPost?.id;
    try {
      await deletePost(postId);
      // Update the local posts state
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      setSelectedPost(null);
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete the post. Please try again.");
    }
  }
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <SideBarView
        admin={admin}
        posts={posts}
        setAdmin={setAdmin}
        selectedPost={selectedPost}
        setSelectedPost={setSelectedPost}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        messages={messages}
        selectedMessage={selectedMessage}
        onSelectMessage={setSelectedMessage}
      />

      {/* Main Content - Editor */}
      <section className="flex-1 p-8">
        {activeSection === "posts" && (
          <EditArticleView selectedPost={selectedPost} setSelectedPost={setSelectedPost} handleSave={handleSave} handleDelete={handleDelete}/>
        )}
        {activeSection === "messages" && <MessagesView selectedMessage={selectedMessage}/>}
      </section>
    </div>
  );
}

export { PanelView as Component };
export default PanelView;
