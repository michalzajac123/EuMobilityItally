export default function HotelCard({ hotel }) {
  return (
    <div
      className="group relative bg-white rounded-2xl border border-gray-100 
      shadow-[0_4px_14px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_22px_rgba(0,0,0,0.10)]
      hover:-translate-y-[6px] transition-all duration-500 overflow-hidden"
    >
      {/* IMAGE SECTION */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={hotel.image_url}
          alt={hotel.name}
          className="h-full w-full object-cover transition duration-[800ms] 
          group-hover:scale-110 group-hover:brightness-[0.85]"
        />

        {hotel.location && (
          <span
            className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-[2px] 
            text-[var(--green-text-color)] text-xs font-semibold rounded-full shadow-sm"
          >
            📍 {hotel.location}
          </span>
        )}

        {/* Soft vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40 opacity-0 
        group-hover:opacity-60 transition duration-500"></div>
      </div>

      {/* CONTENT */}
      <div className="p-6 space-y-3">
        <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-[var(--green-text-color)] transition">
          {hotel.name}
        </h3>

        <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
          {hotel.description}
        </p>
      </div>

      {/* bottom glow accent */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] 
      bg-gradient-to-r from-[var(--green-text-color)] to-transparent opacity-60"></div>
    </div>
  );
}
