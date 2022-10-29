import Navigation from "../components/Navigation";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import AboutList from "../about.json";
import Head from "next/head";

//function renders the projects page
//renders a heading with two rows containing projects
function Project() {
  return (
    <div>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R03BYRJNCK"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-R03BYRJNCK');
        </script>
      </Head>
      <Navigation type="projects" />
      <div className="w-75 text-center mx-auto">
        <div className="container-fluid my-5 py-2 text-center">
          <h1>Projects:</h1>
        </div>
        <div className="row">
          {AboutList.projects.map((project) => {
            return <ProjectCard data={project} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
