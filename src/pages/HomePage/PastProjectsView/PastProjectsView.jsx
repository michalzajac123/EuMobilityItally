import PastProjectCard from "./PastProjectCard"
import PolandFlag from "../../../assets/Images/countryImage/PolandFlag.png";
import CroatiaFlag from "../../../assets/Images/countryImage/CroatiaFlag.jpg";
import ItalyFlag from "../../../assets/Images/countryImage/ItalyFlag.png";
export default function PastProjectsView() {   
    const projects = [
        {
            countryName: "Italy",
            imgSrc: ItalyFlag,
            description: "Discover our projects carried out in Italy as part of the mobility program."
        },
        {
            countryName: "Croatia",
            imgSrc: CroatiaFlag,
            description: "Discover our mobility projects in Croatia aimed at enhancing student experiences."
        },
        {
            //Po angielsku
            countryName: "Polska",
            imgSrc: PolandFlag,
            description: "Discover our projects promoting student mobility in Poland."
        },
        
    ];
    return (
        <div className="p-20 text-sm font-bold">
            <div className="header-container justify-around flex flex-col">
                <div className="text-[#20b486] mb-2">Explore our last projects</div>
                <div className="text-2xl mt-2 mb-4">Past Projects</div>
                <div className="font-thin  text-[#667085] mb-6">Lets find out our last projects and become part of us</div>
            </div>
            <div className="flex md:flex-row flex-col justify-center items-center">
                {projects.map((project, index) => (
                    <div key={index} className="m-4">
                        <PastProjectCard 
                            countryName={project.countryName} 
                            description={project.description}
                            imgSrc={project.imgSrc} 
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}