import Navigation from "../components/Navigation";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import AboutList from "../about.json";
import Head from "next/head";

//function renders the projects page
//renders a heading with two rows containing projects
function Project() {
  return (
    <div className="site-layout">
      <Head>
        <title>Projects | Luke Paine Portfolio</title>
        <meta
          name="description"
          content="Selected web development projects by Luke Paine."
        />
      </Head>
      <Navigation type="projects" />
      <main className="page-content">
        <div className="page-width py-3">
          <div className="my-3 py-2 text-start">
            <h1>Projects</h1>
            <p className="fs-5 mb-0">
              Select a project card to view implementation details.
            </p>
          </div>
          <div className="row g-3">
            {AboutList.projects.map((project) => {
              return <ProjectCard key={project.slug} data={project} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Project;
