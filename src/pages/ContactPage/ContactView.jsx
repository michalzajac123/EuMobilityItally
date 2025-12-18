import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
import { useEffect } from "react";
export function Component() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white w-full flex justify-center items-center bg-[#F7FAFF] p-6">
      <div className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-2xl w-full max-w-6xl p-12">
        <div className="w-full flex justify-center mb-10">
          <h2 className="text-[var(--green-text-color)] text-2xl font-bold tracking-[3px] relative">
            CONTACT US
            <span className="block w-full h-[2px] mt-1 bg-[var(--green-text-color)]"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactDetails
            phone="+39 351 412 6214"
            email="ariela@eumobility.eu"
            address="Via XII Ottobre, 1/Piano 6, 16121 Genova GE, Italy"
          />
        </div>
      </div>
    </div>
  );
}
