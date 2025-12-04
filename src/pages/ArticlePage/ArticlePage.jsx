import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Component() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const [selectedImage, setSelectedImage] = useState(null);

  console.log("ArticlePage loaded!");
  console.log("Article data:", data);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Article not found</h2>
          <button
            onClick={() => navigate("/")}
            className="bg-[var(--green-text-color)] text-white px-6 py-2 rounded-lg"
          >
            Go back home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-[var(--green-text-color)] hover:underline font-semibold"
        >
          ← Back to projects
        </button>

        {data.images?.[0] && (
          <img
            src={data.images[0]}
            alt={data.title}
            className="w-full h-100 object-cover object-[center_90%] rounded-xl mb-8"
          />
        )}

        <h1 className="text-4xl font-bold mb-4 text-[var(--green-text-color)]">
          {data.title}
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-12">
          {data.body}
        </p>

        {/* Galeria zdjęć */}
        {data.images && data.images.length > 1 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6 text-[var(--green-text-color)]">
              Photo Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.images.map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`${data.title} - photo ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-4xl">🔍</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </div>
  );
}
