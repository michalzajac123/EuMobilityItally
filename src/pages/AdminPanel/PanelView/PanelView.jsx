import { useState, useEffect } from "react";
import { fetchPosts, fetchMessages } from "../../../utils/store";
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
      <section className="flex-1 p-8 overflow-scroll h-screen">
        {activeSection === "posts" && (
          <EditArticleView selectedPost={selectedPost} />
        )}
        {activeSection === "messages" && (
          <MessagesView selectedMessage={selectedMessage} />
        )}
        {activeSection === "settings" && <SettingView />}
      </section>
    </div>
  );
}

export { PanelView as Component };
export default PanelView;
