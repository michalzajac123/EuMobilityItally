export default function PostList({ posts, selectedPost, setSelectedPost }) {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-[var(--green-text-color)]">
          Posts ({posts.length})
        </h4>
        <button className="bg-[var(--green-text-color)] hover:bg-[var(--green-text-hover)] text-white px-3 py-1 rounded-lg text-sm transition">
          + New
        </button>
      </div>
      <div className="space-y-2">
        {posts.map((post, index) => (
          <div
            key={index}
            onClick={() => setSelectedPost(post)}
            className={`p-3 rounded-lg cursor-pointer transition-all ${
              selectedPost?.id === post.id
                ? "bg-[var(--green-text-color)] text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <h5 className="font-semibold text-sm truncate mb-1">
              {post.title}
            </h5>
            <p className="text-xs opacity-75 line-clamp-2">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
