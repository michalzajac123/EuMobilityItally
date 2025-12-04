import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleNavigateClick } from "../../utils/handleNavigateClick";
import { fetchHotels } from "../../utils/store";
import HotelCard from "../../pages/Accommodation/HotelCard";

export function Component() {
  const navigate = useNavigate();
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHotels({ setHotels, setLoading });
  }, []);

  return (
    <div className="py-12 md:py-14 px-6 max-w-6xl mx-auto">
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl leading-tight font-bold text-gray-900">
          Comfortable{" "}
          <span className="text-[var(--green-text-color)]">Accommodation</span>{" "}
          for Participants
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We provide cozy and safe places to stay during your mobility project
          in Italy. Fully equipped rooms, great location, and friendly
          environment.
        </p>
      </section>

      {loading ? (
        <p className="text-center text-gray-500">Loading hotels...</p>
      ) : hotels.length === 0 ? (
        <p className="text-center text-gray-500">No hotels found.</p>
      ) : (
        <section className="grid md:grid-cols-3 gap-8 mb-20">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </section>
      )}

      <div className="text-center mt-10">
        <button
          onClick={() => handleNavigateClick(navigate, "/contact")}
          className="px-6 cursor-pointer py-3 bg-[var(--green-text-color)] hover:opacity-90 text-white rounded-lg font-medium transition"
        >
          Contact us for more details
        </button>
      </div>
    </div>
  );
}
