import React from "react";
import AdminDataView from "./AdminDataView";
import PostList from "./PostList";

function Sidebar({ posts, selectedPost, setSelectedPost, activeTab, setActiveTab }) {
  return (
    <aside className="w-80 bg-white shadow-lg flex flex-col">

      <AdminDataView />

      {/* 🔥 NAV BUTTONS */}
      <div className="flex gap-2 p-2">
        <button 
          onClick={() => setActiveTab("posts")}
          className={`p-2 flex-1 rounded ${activeTab==="posts" ? "bg-green-500 text-white" : "bg-gray-200"}`}>
          Posts
        </button>

        <button 
          onClick={() => setActiveTab("messages")}
          className={`p-2 flex-1 rounded ${activeTab==="messages" ? "bg-green-500 text-white" : "bg-gray-200"}`}>
          Messages
        </button>
      </div>

      {/* renderuj listę tylko jeżeli posts jest aktywny */}
      {activeTab === "posts" && (
        <PostList
          posts={posts}
          selectedPost={selectedPost}
          setSelectedPost={setSelectedPost}
        />
      )}
    </aside>
  );
}

export default Sidebar;
