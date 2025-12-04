import React from "react";
import { useNavigate } from "react-router-dom";
import { handleNavigateClick } from "../../utils/handleNavigateClick";

export function Component() {
  const navigate = useNavigate();

  return (
    <div className="py-12 md:py-14 px-6 max-w-6xl mx-auto">
      {/* HERO */}
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

      {/* HOTEL CARDS */}
      <section className="grid md:grid-cols-3 gap-8 mb-20">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition"
          >
            <img
              src={`/hotel${i}.jpg`}
              alt=""
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">
                Hotel Example {i}
              </h3>
              <p className="text-gray-600 mt-2">
                Close to project location, Wi-Fi, breakfast included, shared
                rooms available.
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <div className="text-center mt-10">
        <button
          onClick={() => handleNavigateClick(navigate, "/contact")}
          className="px-6 cursor-pointer py-3 bg-[var(--green-text-color)] text-white rounded-lg font-medium hover:[var(--green-text-hover)]"
        >
          Contact us for more details
        </button>
      </div>
    </div>
  );
}
