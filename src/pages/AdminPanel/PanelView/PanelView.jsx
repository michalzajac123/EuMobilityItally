import { useState, useEffect } from "react";
import fetchPosts from "../../../utils/store";
import AdminDataView from "./AdminDataView";
import PostList from "./PostList";
import EditArticleView from "./EditArticleView";
import { useAuthRedirect, getAdminData } from "../../../utils/supabase.js";
function PanelView() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [admin, setAdmin] = useState(null);
  useAuthRedirect({ mustBeLoggedIn: true });

  useEffect(() => {
    async function loadPosts() {
      const postsData = await fetchPosts();
      setPosts(postsData || []);
    }
    loadPosts();
    getAdminData().then((res) =>{
      console.log("dsa")
      if(res.data) setAdmin(res.data)
      else console.log("No admin data found");
    }
    );
  }, []);
  useEffect(() => {
    console.log("Posts loaded in PanelView:", selectedPost);
  }, [selectedPost]);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-80 bg-white shadow-lg flex flex-col">
        {/* Admin Info */}
        {admin && <AdminDataView imgUrl={admin.avatar_url} name={admin.username}/>}

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
