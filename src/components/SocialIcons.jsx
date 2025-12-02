import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex gap-3 rounded-sm">
      
      {/* Instagram */}
      <a
        href="https://www.instagram.com/"
        target="_blank"
        style={{ backgroundColor: "var(--red-color)" }}
        className="inline-flex items-center justify-center w-9 h-9 rounded-full text-white hover:brightness-110 transition"
      >
        <FaInstagram size={16} />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/"
        target="_blank"
        style={{ backgroundColor: "var(--red-color)" }}
        className="inline-flex items-center justify-center w-9 h-9 rounded-full text-white hover:brightness-110 transition"
      >
        <FaFacebookF size={16} />
      </a>

      {/* Twitter */}
      <a
        href="https://x.com/home?lang=pl"
        target="_blank"
        style={{ backgroundColor: "var(--red-color)" }}
        className="inline-flex items-center justify-center w-9 h-9 rounded-full text-white hover:brightness-110 transition"
      >
        <FaTwitter size={16} />
      </a>
    </div>
  );
}

