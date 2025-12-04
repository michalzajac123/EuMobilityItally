import PastProjectCard from "./PastProjectCard";
import PolandFlag from "../../../assets/Images/countryImage/PolandFlag.png";
import CroatiaFlag from "../../../assets/Images/countryImage/CroatiaFlag.jpg";
import ItalyFlag from "../../../assets/Images/countryImage/ItalyFlag.png";
import SwedenFlag from "../../../assets/Images/countryImage/SwedenFlag.jpg";

import fetchPosts from "./store";
import { useEffect} from "react";
export default function PastProjectsView() {
  
  useEffect(() => {
    async function loadPosts() {
      const posts = await fetchPosts();
      console.log("Loaded posts in PastProjectsView:", posts);
    }
    loadPosts();
  }, []);
  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 text-sm font-bold">
        <div className="header-container justify-around flex flex-col text-center md:text-left">
          <div className="text-[#20b486] mb-2">Explore our last projects</div>
          <div className="text-2xl mt-2 mb-4">Projects</div>
          <div className="font-thin text-[#667085] mb-6">
            Lets find out our last projects and become part of us
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {/* {projects.map((project, index) => (
            <div key={index} className="w-full max-w-sm">
              <PastProjectCard
                countryName={project.countryName}
                description={project.description}
                imgSrc={project.imgSrc}
              />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
