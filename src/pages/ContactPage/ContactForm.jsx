import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Wysłano:", formData);
  };

  const isSet = formData.name && formData.email && formData.message;

  const inputBase =
    "border border-gray-300 rounded-md w-full p-3 mt-1 mb-4 text-sm " +
    "transition-all duration-200 outline-none " +
    "focus:border-[var(--green-text-color)] border-2 border-[var(--green-text-color)] ";

  return (
    <div>
      <h3 className="text-lg font-semibold mb-6">Leave us a message</h3>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="text-sm font-medium">Name</label>
        <input
          className={inputBase}
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label className="text-sm font-medium">Email Address</label>
        <input
          className={inputBase}
          placeholder="Your Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label className="text-sm font-medium">Your Message</label>
        <textarea
          className={inputBase + " h-32 resize-none focus:min-h-[130px]"}
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        <button
          disabled={!isSet}
          className={`w-full py-3 rounded-md mt-6 text-sm font-medium transition-all duration-200 
            ${
              isSet
                ? "bg-[var(--green-text-color)] text-white hover:opacity-90 hover:scale-[1.02] active:scale-95  cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
