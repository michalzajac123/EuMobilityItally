import { useState } from "react";
import { sendMessage } from "../../utils/store";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
    subject: "",  
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Wysłano:", formData);
  };

  const isSet = formData.name && formData.email && formData.content;

  const inputBase =
    "border border-gray-300 rounded-md w-full p-3 mt-1 mb-4 text-sm " +
    "transition-all duration-200 outline-none " +
    "focus:border-[var(--green-text-color)] border-2 border-[var(--green-text-color)] ";
  const validateForm = () => {
    if(formData.email.indexOf("@") === -1) {
      return false;
    }
    if(formData.content.length < 10) {
      return false;
    }
    if(formData.name.length < 2) {
      return false;
    }
    if(formData.subject.length < 2) {
      return false;
    }
    return true;
  }
  const handleClick = async () => {
    if(!validateForm()) {
      alert("Please fill all fields correctly.");
      return;
    }
    try {
      await sendMessage(formData)
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        content: "",
      });
    } catch (error) {
      alert("Error sending message: " + error.message);
    }
  }
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

        <label className="text-sm font-medium">Subject</label>
        <input
          className={inputBase}
          placeholder="Subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />

        <label className="text-sm font-medium">Your message</label>
        <textarea
          className={inputBase + " h-32 resize-none focus:min-h-[130px]"}
          placeholder="Your message"
          name="content"
          value={formData.content}
          onChange={handleChange}
        />

        <button
          disabled={!isSet}
          onClick={handleClick}
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
