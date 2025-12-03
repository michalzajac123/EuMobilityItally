import firstPhoto from "../../../assets/Images/teamImage/fabio.jpg";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
export default function OurTeamView({
  name,
  photo,
  profession,
  email,
  phoneNumber,
}) {
  return (
    <div className="bg-white shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 p-8 flex flex-col items-center text-center w-full max-w-[320px]">
      <div className="img-container rounded-full overflow-hidden w-32 h-32 mb-6 border-4 border-[var(--green-text-color)]">
        <img
          src={photo || firstPhoto}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-bold text-xl mb-2 text-gray-800">{name}</h3>
      <p className="text-[var(--green-text-color)] font-semibold text-sm uppercase mb-3">
        {profession}
      </p>
      <a
        href={`mailto:${email}`}
        className="mt-4 flex items-center text-[var(--gray-text-color)] hover:underline"
      >
        <IoMdMail className="mr-2" />
        {email}
      </a>
      <div className="mt-2 flex items-center text-[var(--gray-text-color)]">
        <FaPhone className="mr-2" />
        {phoneNumber}
      </div>
    </div>
  );
}
