import PastProjectCard from "./PastProjectCard";
import PolandFlag from "../../../assets/Images/countryImage/PolandFlag.png";
import CroatiaFlag from "../../../assets/Images/countryImage/CroatiaFlag.jpg";
import ItalyFlag from "../../../assets/Images/countryImage/ItalyFlag.png";
import SwedenFlag from "../../../assets/Images/countryImage/SwedenFlag.jpg";
export default function PastProjectsView() {
  const projects = [
    {
      countryName: "Italy",
      imgSrc: ItalyFlag,
      description:
        "Discover our projects carried out in Italy as part of the mobility program.",
    },
    {
      countryName: "Croatia",
      imgSrc: CroatiaFlag,
      description:
        "Discover our mobility projects in Croatia aimed at enhancing student experiences.",
    },
    {
      //Po angielsku
      countryName: "Polska",
      imgSrc: PolandFlag,
      description:
        "Discover our projects promoting student mobility in Poland.",
    },
    {
      countryName: "Sweeden",
      imgSrc: SwedenFlag,
      description:
        "Discover our projects promoting student mobility in Sweden.",
    },
  ];
  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 text-sm font-bold">
        <div className="header-container justify-around flex flex-col text-center md:text-left">
          <div className="text-[#20b486] mb-2">Explore our last projects</div>
          <div className="text-2xl mt-2 mb-4">Past Projects</div>
          <div className="font-thin text-[#667085] mb-6">
            Lets find out our last projects and become part of us
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {projects.map((project, index) => (
            <div key={index} className="w-full max-w-sm">
              <PastProjectCard
                countryName={project.countryName}
                description={project.description}
                imgSrc={project.imgSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
