import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import GoogleMap from "./GoogleMap";
import { useState } from "react";

const ContactDetails = ({ address = "example example", phone, email }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="text-gray-700 text-sm leading-6">
      <p className="mb-6">
        <strong className="font-semibold text-base">Weekend UX</strong>
        <br />
        Via XII Ottobre, 1/Piano 6, 16121 Genova GE, Italy
      </p>

      <div className="space-y-4 mt-6">
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-[var(--green-text-color)] text-lg" />
          <span>{phone}</span>
        </div>

        <div className="flex items-center gap-3">
          <FaEnvelope className="text-[var(--green-text-color)] text-lg" />
          <span>{email}</span>
        </div>

        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-[var(--green-text-color)] text-lg" />
          <span>{address}</span>
        </div>
      </div>
      <div className="relative w-full max-w-md  min-h-[250px]">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-10">
            <p className="text-gray-600 text-md">Loading map...</p>
          </div>
        )}

        <GoogleMap
          location="Regus - Genova, De Ferrari"
          zoom={18}
          setLoaded={setLoaded}
        />
      </div>
    </div>
  );
};

export default ContactDetails;
