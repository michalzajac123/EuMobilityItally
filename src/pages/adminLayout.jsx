import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import {fetchPosts} from "../utils/store";

function AdminLayout() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      const postsData = await fetchPosts();
      setPosts(postsData || []);
    }
    loadPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      <main className="flex-1 p-6">
        <Outlet context={{ posts, selectedPost, setSelectedPost }} />
      </main>
    </div>
  );
}

export { AdminLayout as Component };
export default AdminLayout;
