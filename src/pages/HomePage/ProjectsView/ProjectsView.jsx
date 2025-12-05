import ProjectCard from "./ProjectCard.jsx";
import {fetchPosts} from "../../../utils/store";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PastProjectsView() {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  const handleClick = (post) => {
    console.log("Navigating to article with post:", post);
    navigate(`/article`, { state: post });
  };

  useEffect(() => {
    async function loadPosts() {
      const posts = await fetchPosts();
      setPosts(posts || []);
    }
    loadPosts();
  }, []);
  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 text-sm font-bold">
        <div id="project-section" className="header-container justify-around flex flex-col text-center md:text-left">
          <div className="text-[#20b486] mb-2">Explore our last projects</div>
          <div className="text-2xl mt-2 mb-4">Projects</div>
          <div className="font-thin text-[#667085] mb-6">
            Lets find out our last projects and become part of us
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {posts.map((project, index) => (
            <div key={index} className="w-full max-w-sm">
              <ProjectCard project={project} handleClick={handleClick} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
