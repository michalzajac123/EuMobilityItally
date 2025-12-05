export default function PostList({ posts, selectedPost, setSelectedPost }) {
  return (
    <div className="flex-1 overflow-y-auto p-4">
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
