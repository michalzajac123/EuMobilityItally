import React, { useState, useEffect } from "react";
import fetchPosts from "../../../utils/store";
import AdminDataView from "./AdminDataView";
import PostList from "./PostList";
import EditArticleView from "./EditArticleView";

function PanelView() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  useEffect(() => {
    async function loadPosts() {
      const postsData = await fetchPosts();
      setPosts(postsData || []);
    }
    loadPosts();
  }, []);
  useEffect(() => {
    console.log("Posts loaded in PanelView:", selectedPost);
  }, [selectedPost]);
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-80 bg-white shadow-lg flex flex-col">
        {/* Admin Info */}
        <AdminDataView />

        {/* Posts List */}
        <PostList posts={posts} selectedPost={selectedPost} setSelectedPost={setSelectedPost}/>
      </aside>

      {/* Main Content - Editor */}
      <section className="flex-1 p-8">
        <EditArticleView selectedPost={selectedPost}/>
      </section>
    </div>
  );
}

export { PanelView as Component };
export default PanelView;
