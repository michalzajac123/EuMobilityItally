import { FaStar } from "react-icons/fa";

export default function TestimonialCard({ item }) {
  return (
    <div
      className="group bg-white rounded-2xl shadow-sm border border-gray-200 p-8 
                 hover:shadow-2xl hover:border-[var(--green-text-color)]/30 
                 transition-all duration-300 flex flex-col justify-between 
                 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-[var(--green-text-color)] to-transparent rounded-full" />

      <div className="flex gap-1 mb-4">
        {[...Array(item.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" size={14} />
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed text-[15px] mb-6 italic">
        "{item.text}"
      </p>

      <div className="border-t border-gray-100 pt-5">
        <h4 className="font-bold text-gray-900">{item.name}</h4>
        <p className="text-xs text-[var(--green-text-color)] font-medium">
          {item.role}
        </p>
      </div>
    </div>
  );
}
