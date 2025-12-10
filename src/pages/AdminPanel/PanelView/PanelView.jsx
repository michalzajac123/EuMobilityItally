import { useState, useEffect } from "react";
import {
  fetchPosts,
  fetchMessages,
  updatePost,
  deletePost,
  deleteMessage,
  uploadImage,
} from "../../../utils/store";
import EditArticleView from "./EditPanelView/EditArticleView.jsx";
import { useAuthRedirect, getAdminData } from "../../../utils/supabase.js";
import SideBarView from "./SideBarView/SideBarView.jsx";
import MessagesView from "./EditPanelView/MessagesView.jsx";
import SettingView from "./EditPanelView/SettingView.jsx";
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
  const [newImageFiles, setNewImageFiles] = useState([]);
  const [isMobileEditorOpen, setIsMobileEditorOpen] = useState(false);

  useAuthRedirect({ mustBeLoggedIn: true });

  useEffect(() => {
    async function loadData() {
      const postsData = await fetchPosts();
      const messagesData = await fetchMessages(); // Assuming fetchMessages is defined elsewhere
      setPosts(postsData || []);
      setMessages(messagesData || []);
      setPosts(postsData || []);
    }
    loadData();

    getAdminData().then((res) => {
      console.log("dsa");
      if (res.data) setAdmin(res.data);
      else console.log("No admin data found");
    });
  }, []);

  const handleSave = async () => {
    if (!selectedPost) return;
    console.log("Saving post:", selectedPost.id);

    try {
      const uploadedImageUrls = [];

      if (newImageFiles && newImageFiles.length > 0) {
        console.log("Uploading new images:", newImageFiles.length);

        for (const file of newImageFiles) {
          const uploadedUrl = await uploadImage(file);
          uploadedImageUrls.push(uploadedUrl);
          console.log("Uploaded image URL:", uploadedUrl);
        }
      }

      const existingImageUrls = selectedPost.images.filter(
        (img) => typeof img === "string" && img.startsWith("http")
      );

      const allImageUrls = [...existingImageUrls, ...uploadedImageUrls];
      console.log("All image URLs to save:", allImageUrls);

      const updateData = {
        title: selectedPost.title,
        body: selectedPost.body,
        images: allImageUrls,
      };

      console.log("Update data:", updateData);

      await updatePost(selectedPost.id, updateData);

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === selectedPost.id
            ? {
                ...post,
                title: selectedPost.title,
                body: selectedPost.body,
                images: allImageUrls,
              }
            : post
        )
      );

      // Wyczyść nowe pliki po zapisie
      setNewImageFiles([]);

      alert("Post saved successfully!");
    } catch (error) {
      console.error("Error updating post:", error);
      alert("Failed to update the post. Please try again.");
    }
  };

  const handleDeletePost = async () => {
    if (!selectedPost) return;
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
  };
  const handleDeleteMessage = async () => {
    if (!selectedMessage) return;
    const messageId = selectedMessage?.id;
    try {
      await deleteMessage(messageId);
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message.id !== messageId)
      );
      setSelectedMessage(null);
    } catch (error) {
      console.error("Error deleting message:", error);
      alert("Failed to delete the message. Please try again.");
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 flex h-screen overflow-hidden">
      {/* Sidebar - główny widok na mobile, lewy panel na desktop */}
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
        setIsMobileEditorOpen={setIsMobileEditorOpen}
      />

      {/* Main Content - wysuwany panel na mobile, normalny widok na desktop */}
      <section
        className={`
          fixed md:relative
          top-0 right-0
          w-full md:flex-1
          h-screen
          bg-gray-50
          p-4 md:p-8
          overflow-y-auto
          transition-transform duration-300
          z-40
          ${
            isMobileEditorOpen
              ? "translate-x-0"
              : "translate-x-full md:translate-x-0"
          }
        `}
      >
        {/* Przycisk zamykania na mobile */}
        <button
          onClick={() => setIsMobileEditorOpen(false)}
          className="md:hidden fixed top-4 right-4 z-50 bg-[var(--green-text-color)] hover:bg-[var(--green-text-hover)] text-white p-3 rounded-lg shadow-lg"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {activeSection === "posts" && (
          <EditArticleView
            selectedPost={selectedPost}
            setSelectedPost={setSelectedPost}
            handleSave={handleSave}
            handleDelete={handleDeletePost}
            setNewImages={setNewImageFiles}
          />
        )}
        {activeSection === "messages" && (
          <MessagesView
            selectedMessage={selectedMessage}
            onDelete={handleDeleteMessage}
          />
        )}
        {activeSection === "settings" && <SettingView />}
      </section>
    </div>
  );
}

export { PanelView as Component };
export default PanelView;
