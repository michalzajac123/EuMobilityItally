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
  setIsMobileEditorOpen,
}) {
  const isSidebarOpen = true; // Możesz dodać logikę do otwierania/zamykania sidebaru 
  useEffect(() => {
    getAdminData().then((res) => {
      if (res.data) setAdmin(res.data);
      else console.log("No admin data found");
    });
  }, [setAdmin]);

  const handleClickNewPost = () => {
    const newPost = {
      title: "New Post",
      body: "",
      images: [],
      created_at: new Date().toISOString(),
    };
    setSelectedPost(newPost);
    setIsMobileEditorOpen(true); // Otwórz edytor na mobile
  };

  return (
    <>
      <aside
        className={`
          w-full
          ${isSidebarOpen ? "md:w-80" : "md:w-0"}
          bg-white shadow-lg flex flex-col 
          h-screen
          transition-all duration-300
          overflow-hidden
        `}
      >
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
          <div className="flex-1 overflow-y-auto flex flex-col">
            <div className="flex justify-between items-center p-2 sm:p-4 gap-2 flex-shrink-0">
              <h4 className="text-sm sm:text-base md:text-lg font-semibold text-[var(--green-text-color)] truncate">
                Posts ({posts.length})
              </h4>
              <button
                onClick={handleClickNewPost}
                className="bg-[var(--green-text-color)] hover:bg-[var(--green-text-hover)] text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-semibold transition shadow-sm hover:shadow-md whitespace-nowrap flex-shrink-0"
              >
                + New
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-2 sm:px-4 pb-4">
              <PostList
                posts={posts}
                selectedPost={selectedPost}
                setSelectedPost={(post) => {
                  setSelectedPost(post);
                  setIsMobileEditorOpen(true); // Otwórz edytor na mobile po wybraniu posta
                }}
              />
            </div>
          </div>
        )}

        {/* Messages list */}
        {activeSection === "messages" && (
          <MessagesList
            messages={messages}
            onSelectMessage={(msg) => {
              onSelectMessage(msg);
              setIsMobileEditorOpen(true); // Otwórz edytor na mobile po wybraniu wiadomości
            }}
            selectedMessage={selectedMessage}
          />
        )}

        {activeSection === "settings" && <LogoutBtn />}
      </aside>
    </>
  );
}
