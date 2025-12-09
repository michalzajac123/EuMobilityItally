export default function SideBarNav({ activeSection, setActiveSection }) {
  return (
    <nav className="flex flex-row gap-2 p-4">
      <button
        className={`text-center px-4 py-3 rounded-lg flex-1 transition font-medium ${
          activeSection === "posts"
            ? "bg-[var(--green-text-color)] text-white"
            : "text-[var(--black-color)] hover:bg-gray-100"
        }`}
        onClick={() => setActiveSection("posts")}
      >
        Posts
      </button>
      <button
        className={`text-center px-4 py-3 rounded-lg flex-1 transition font-medium ${
          activeSection === "messages"
            ? "bg-[var(--green-text-color)] text-white"
            : "text-[var(--black-color)] hover:bg-gray-100"
        }`}
        onClick={() => setActiveSection("messages")}
      >
        Messages
      </button>

      <button
        className={`text-center px-4 py-3 rounded-lg flex-1 transition font-medium ${
          activeSection === "settings"
            ? "bg-[var(--green-text-color)] text-white"
            : "text-[var(--black-color)] hover:bg-gray-100"
        }`}
        onClick={() => setActiveSection("settings")}
      >
        Settings
      </button>
    </nav>
  );
}
