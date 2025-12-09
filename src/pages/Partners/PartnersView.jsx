import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleNavigateClick } from "../../utils/handleNavigateClick";

export default function PartnersView({
  title,
  highlight,
  description,
  fetchData,
  CardComponent,
}) {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Handle both naming conventions
    fetchData({ setHotels: setItems, setItems, setLoading });
  }, [fetchData]);

  return (
    <div className="py-12 md:py-14 px-6 max-w-6xl mx-auto">
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl leading-tight font-bold text-gray-900">
          {title}{" "}
          <span className="text-[var(--green-text-color)]">{highlight}</span>
        </h1>

        {description && (
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{description}</p>
        )}
      </section>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : items.length === 0 ? (
        <p className="text-center text-gray-500">No data found.</p>
      ) : (
        <section className="grid md:grid-cols-3 gap-8 mb-20">
          {items.map((item) => (
            <CardComponent key={item.id} item={item} />
          ))}
        </section>
      )}

      <div className="text-center mt-10">
        <button
          onClick={() => handleNavigateClick(navigate, "/contact")}
          className="px-6 py-3 bg-[var(--green-text-color)] hover:bg-[var(--green-text-hover)] text-white rounded-lg font-medium transition"
        >
          Contact us for more details
        </button>
      </div>
    </div>
  );
}
