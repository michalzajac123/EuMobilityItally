import heroImage from "../../../assets/Images/heroImage.png";
import bilig from "../../../assets/Images/sponsorImage/billig.png";
import ceraminAndMe from "../../../assets/Images/sponsorImage/ceraminAndMe.png";
import ichaMochi from "../../../assets/Images/sponsorImage/ichaMochi.jpg";
import forenom from "../../../assets/Images/sponsorImage/forenom.png";
import bazar from "../../../assets/Images/sponsorImage/bazar.png";
import erasmus from "../../../assets/Images/sponsorImage/erasmus.png";
const HeroView = () => {
  const sponsorsList = [
    { name: "Erasmus+", logo: erasmus },
    { name: "Bilig", logo: bilig },
    { name: "CeraminAndMe", logo: ceraminAndMe },
    { name: "IchaMochi", logo: ichaMochi },
    { name: "Forenom", logo: forenom },
    { name: "Bazar", logo: bazar },
  ]
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-16 md:flex-row md:justify-between">
        {/* Lewa kolumna */}
        <div className="flex flex-col max-w-xl text-center md:text-left">
          <h1
            className="
    text-5xl                /* mobile */
    sm:text-6xl             /* ≥640px */
    md:text-6xl             /* ≥768px */
    lg:text-7xl             /* ≥1024px */
    xl:text-[56px]          /* ≥1280px */
    2xl:text-[64px]         /* ≥1536px */
    font-bold
    text-[var(--black-color)]
  "
          >
            Develop Your{" "}
            <span className="text-[var(--green-text-color)]">Future </span>
            Through{" "}
            <span className="text-[var(--green-text-color)]">
              International
            </span>
            <br />
            Projects in{" "}
            <span className="text-[var(--green-text-color)]">Italy</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg sm:text-xl">
            Take part in international mobility projects in Italy. br Gain new
            skills, make global connections, and grow your future abroad.
          </p>

       
        </div>

        {/* Prawa kolumna – znika na telefonach */}
        <div className="hidden md:flex md:w-1/2 md:justify-center md:items-center">
          <div className="rounded-full overflow-hidden shadow-lg w-full max-w-sm">
            <img
              src={heroImage}
              alt="Hero Graphic"
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex mx-auto max-w-6xl px-4 pb-16">
        <div className="flex items-center justify-start gap-8 flex-wrap w-full">
          <button className="rounded-lg bg-[var(--green-text-color)] px-6 py-3 font-semibold text-white hover:bg-[var(--green-text-hover)] cursor-pointer transition whitespace-nowrap">
            Check all sponsors
          </button>
          {sponsorsList.map((sponsor, index) => (
            <div key={index}>
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroView;
