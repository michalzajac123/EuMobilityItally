import { useEffect } from "react";
import AdminDataView from "./components/AdminDataView.jsx";
import PostList from "./Lists/PostList.jsx";
import { getAdminData } from "../../../../utils/supabase";
import SideBarNav from "./components/SideBarNav.jsx";
import MessagesList from "./Lists/MessagesList.jsx";
import LogoutBtn from "./components/LogoutBtn.jsx";
export default function SideBarView({
  admin,
  posts,
  setAdmin,
  setSelectedPost,
  selectedPost,
  activeSection,
  setActiveSection,
  messages,
  selectedMessage,
  onSelectMessage,
}) {

  useEffect(() => {
    getAdminData().then((res) => {
      if (res.data) setAdmin(res.data);
      else console.log("No admin data found");
    });
  }, [setAdmin]);

  return (
    <aside className="w-80 bg-white shadow-lg flex flex-col">
      {/* Admin Info */}
      {admin && (
        <AdminDataView imgUrl={admin.avatar_url} name={admin.username} />
      )}
      <SideBarNav
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      {/* Posts List */}
      {activeSection === "posts" && (
        <PostList
          posts={posts}
          selectedPost={selectedPost}
          setSelectedPost={setSelectedPost}
        />
      )}
      {/* Messages list */}
      {activeSection === "messages" && <MessagesList messages={messages} onSelectMessage={onSelectMessage} selectedMessage={selectedMessage} />}
      {activeSection === "settings" && <LogoutBtn/>}
    </aside>
  );
}
