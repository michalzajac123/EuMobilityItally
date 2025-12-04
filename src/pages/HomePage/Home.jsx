import { useEffect } from "react";
import HeroView from "./HeroView/HeroView.jsx";
import OurTeamView from "./OurTeamView/OutTeamView.jsx";
import ProjectsView from "./ProjectsView/ProjectsView.jsx";
import { useLocation } from "react-router-dom";

export function Component() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo === "projects") {
      setTimeout(() => {
        const projectsSection = document.getElementById("projects-section");
        if (projectsSection) {
          projectsSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [location.state]);

  return (
    <div>
      <HeroView />
      <div id="projects-section">
        <ProjectsView />
      </div>
      <OurTeamView />
    </div>
  );
}
