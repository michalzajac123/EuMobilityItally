import Logo from "../assets/Images/EuMobilityNavbarLogo.png";
import SocialIcons from "./SocialIcons";
export default function FooterView() {
  return (
    <div className=" flex justify-between  mx-auto mt-10">
      <div className="img flex bg-[#20b486] hidden md:block flex-col  align-items-center w-1/3 justify-center p-4">
        <div className="image-container">
          <img src={Logo} alt="Logo" className="w-75" />
        </div>
        <div className="text-container">
          <p className="text-white text-sm mt-2">
            © 2024 EU Mobility Italy. All rights reserved.
          </p>
        </div>
      </div>
      <div className="bg-white w-1/3 hidden md:block border-y-1 "></div>
      <div className="info flex w-full md:w-1/3 flex-col p-6 justify-between bg-[#cd212a]">
        <h3 className="text-white text-xl text-center sm:text-start font-bold mb-4 border-b border-white/30 pb-2">
          Contact Us
        </h3>
        <div className="contact-info mb-6 space-y-3 flex flex-col items-center sm:items-start">
          <div className="flex items-center gap-2">
            <span className="text-white/80">📧</span>
            <p className="text-white text-bold">test@gmailc.om</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white/80">📞</span>
            <p className="text-white text-bold">123456789</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white/80">📍</span>
            <p className="text-white text-bold">Geuna, Italy</p>
          </div>
        </div>
        <div className="social-media flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-white/30">
          <SocialIcons />
          <div>
            <p className="text-white block md:hidden text-sm mt-2">
              © 2024 EU Mobility Italy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
