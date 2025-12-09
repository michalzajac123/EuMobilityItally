export default function PartnersCard({ item }) {
  console.log(item)
  return (
    <div
      className="group relative bg-white rounded-2xl border border-gray-100 
      shadow-[0_4px_14px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_22px_rgba(0,0,0,0.10)]
      hover:-translate-y-[6px] transition-all duration-500 overflow-hidden"
    >
      {/* IMAGE */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image_url}
          alt={item.name}
          className="h-full w-full object-cover transition duration-[800ms] 
          group-hover:scale-110 group-hover:brightness-[0.85]"
        />

        {item.location && (
          <span
            className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-[2px] 
            text-[var(--green-text-color)] text-xs font-semibold rounded-full shadow-sm"
          >
            📍 {item.location}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-6 space-y-3">
        <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-[var(--green-text-color)] transition">
          {item.name}
        </h3>

        <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
          {item.description}
        </p>

      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-[3px] 
      bg-gradient-to-r from-[var(--green-text-color)] to-transparent opacity-60"
      ></div>
    </div>
  );
}
