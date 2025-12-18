export default function EditArticleView({
  selectedPost,
  setSelectedPost,
  handleSave,
  handleDelete,
  setNewImages,
}) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        {selectedPost ? (
          <>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                value={selectedPost.title}
                onChange={(e) =>
                  setSelectedPost({ ...selectedPost, title: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--green-text-color)] text-lg font-semibold"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Content
              </label>
              <textarea
                value={selectedPost.body}
                onChange={(e) => {
                  setSelectedPost({ ...selectedPost, body: e.target.value });
                }}
                rows="12"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--green-text-color)] resize-none"
              />
            </div>

            {selectedPost.images && selectedPost.images.length > 0 && (
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Images
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {selectedPost.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square rounded-lg overflow-hidden border-2 border-gray-200"
                    >
                      <img
                        src={img}
                        alt={`Image ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg border mb-6">
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={async (e) => {
                  const files = Array.from(e.target.files || []);
                  if (files.length === 0) return;

                  const previewUrls = files.map((file) =>
                    URL.createObjectURL(file)
                  );

                  setSelectedPost({
                    ...selectedPost,
                    images: [...(selectedPost.images || []), ...previewUrls],
                  });

                  setNewImages((prevFiles) => [...(prevFiles || []), ...files]);

                  e.target.value = null;
                }}
              />
              <span>Add photos</span>
            </label>
            <div className="flex gap-4">
              <button
                onClick={handleSave}
                className="flex-1 bg-[var(--green-text-color)] hover:bg-[var(--green-text-hover)] text-white font-semibold py-3 rounded-lg transition"
              >
                Save Changes
              </button>
              <button
                onClick={handleDelete}
                className="px-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
              >
                Delete
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              Select a post to edit
            </h3>
            <p className="text-gray-500">
              Choose a post from the list or create a new one
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
