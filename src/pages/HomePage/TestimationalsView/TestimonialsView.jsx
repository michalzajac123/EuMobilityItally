import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TestimonialCard from "./TestimonialCard.jsx"; // poprawiona nazwa pliku
import { fetchTestimonials } from "../../../utils/store";

export default function TestimonialsView() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials({ setTestimonials, setLoading });
  }, []);

  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.max(1, Math.ceil(testimonials.length / perPage)); // min 1, zabezpieczenie

  const next = () => {
    if (testimonials.length === 0) return;
    setPage((p) => (p + 1) % totalPages);
  };
  const prev = () => {
    if (testimonials.length === 0) return;
    setPage((p) => (p - 1 + totalPages) % totalPages);
  };

  const shown = testimonials.length
    ? testimonials.slice(page * perPage, page * perPage + perPage)
    : [];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        {loading ? (
          <div>Loading…</div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-12">Brak opinii do wyświetlenia.</div>
        ) : (
          <>
            {/* HEADER */}
            <div className="text-center mb-16">
              <span className="text-[var(--green-text-color)] text-sm font-bold uppercase tracking-widest bg-[var(--green-text-color)]/10 px-4 py-2 rounded-full inline-block mb-4">
                ⭐ Testimonials
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What People Say
              </h2>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Real feedback from partners and clients we've worked with — communication, process and collaboration.
              </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {shown.map((item, i) => (
                <TestimonialCard key={item.id ?? i} item={item} />
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex items-center justify-center gap-6">
              <button onClick={prev} className="group p-3 border-2 border-gray-200 rounded-full hover:border-[var(--green-text-color)] hover:bg-[var(--green-text-color)]/10 transition shadow-sm hover:shadow-md">
                <FaChevronLeft size={18} className="text-gray-600 group-hover:text-[var(--green-text-color)]" />
              </button>

              {/* Pagination dots */}
              <div className="flex gap-2">
                {[...Array(Math.ceil(testimonials.length / perPage))].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === page ? "bg-[var(--green-text-color)] w-8" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <button onClick={next} className="group p-3 border-2 border-gray-200 rounded-full hover:border-[var(--green-text-color)] hover:bg-[var(--green-text-color)]/10 transition shadow-sm hover:shadow-md">
                <FaChevronRight size={18} className="text-gray-600 group-hover:text-[var(--green-text-color)]" />
              </button>
            </div>

            {/* Bottom text */}
            <p className="text-center text-gray-500 text-sm mt-6">
              Showing {page * perPage + 1} – {Math.min((page + 1) * perPage, testimonials.length)} of {testimonials.length} reviews
            </p>
          </>
        )}
      </div>
    </section>
  );
}
