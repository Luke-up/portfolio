import Navigation from "../components/Navigation";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import AboutList from "../about.json";

//function renders the projects page
//renders a heading with two rows containing projects
function Project() {
  return (
    <div>
      <Navigation />
      <div className="w-75 text-center mx-auto">
        <div className="container-fluid border-top border-bottom border-dark border-4 rounded my-3 py-2 text-center">
          <h1>projects</h1>
        </div>
        <div className="row">
          <ProjectCard data={AboutList.projects.reactGame} />
          <ProjectCard data={AboutList.projects.webApp} />
          <hr className="" />
          <ProjectCard data={AboutList.projects.bakery} />
          <ProjectCard data={AboutList.projects.colour} />
        </div>
      </div>
    </div>
  );
}

export default Project;
