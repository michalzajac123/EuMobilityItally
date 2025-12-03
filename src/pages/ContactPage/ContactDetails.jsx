import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import GoogleMap from "./GoogleMap";

const ContactDetails = ({ address = "example example", phone, email }) => {
  return (
    <div className="text-gray-700 text-sm leading-6">
      <p className="mb-6">
        <strong className="font-semibold text-base">Weekend UX</strong>
        <br />B 37/3 Ground Floor Double Story
        <br />
        Ramesh Nagar , Near Raja Garden
        <br />
        Chowk. Delhi: 110015
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

      <GoogleMap location="Genua, Italy" zoom={18} />
    </div>
  );
};

export default ContactDetails;
