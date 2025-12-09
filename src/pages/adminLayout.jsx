import { Outlet } from "react-router-dom";
import Sidebar from "./AdminPanel/PanelView/Sidebar";
import React, { useState, useEffect } from "react";
import fetchPosts from "../utils/store";

function AdminLayout() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeTab, setActiveTab] = useState("posts"); // <--- TO DODAJEMY

  useEffect(() => {
    async function loadPosts() {
      const postsData = await fetchPosts();
      setPosts(postsData || []);
    }
    loadPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      <Sidebar
        posts={posts}
        selectedPost={selectedPost}
        setSelectedPost={setSelectedPost}
        activeTab={activeTab}
        setActiveTab={setActiveTab}       // <-- PRZEKAZUJEMY
      />

      <main className="flex-1 p-6">
        <Outlet context={{ posts, selectedPost, setSelectedPost, activeTab }} />
      </main>
    </div>
  );
}

export { AdminLayout as Component };
export default AdminLayout;
