import React from "react";
//All data is kept in the AboutData json object
import AboutData from "../about.json";
import SkillCard from "./SkillCard";
import AboutList from "./AboutList";

//main component used in about.js page
//renders information in the center of the screen
function AboutSection(props) {
  //first condition renders the configuration for 'skills'
  //layout uses the skillcard component to display items
  if (props.topic === "skills") {
    return (
      <div className="w-100 text-center mx-auto">
        <div className="row">
          {AboutData.about.skills.map((skill) => {
            const d = new Date();
            let time = d.getTime();
            return <SkillCard key={time} details={skill} />;
          })}
        </div>
      </div>
    );
  }
  //condition renders the 'education' layout
  //layout uses the about list component to render content in the center of the screen
  else if (props.topic === "education") {
    return (
      <div>
        <div className="w-100 text-center mx-auto fs-5">
          {AboutData.about.education.map((edu) => {
            const d = new Date();
            let time = d.getTime();
            return <AboutList key={time} data={edu} />;
          })}
        </div>
      </div>
    );
  }
  //condition renders the 'work' layout
  //layout uses the about list component to render content in the center of the screen
  else if (props.topic === "work") {
    return (
      <div>
        <div className="w-100 text-center mx-auto fs-5">
          {AboutData.about.work.map((job) => {
            const d = new Date();
            let time = d.getTime();
            return <AboutList key={time} data={job} />;
          })}
        </div>
      </div>
    );
  }
  //condition renders the 'profile' layout
  //layout render a heading and single paragraph
  else
    return (
      <div className="w-100 text-center mx-auto">
        {AboutData.about.profile.map((paragraph) => {
          const d = new Date();
          let time = d.getTime();
          return (
            <p key={time} className="text-start fs-5 my-4">
              {paragraph}
            </p>
          );
        })}
        <p className="text-start fs-5 my-5">
          Email: <a href="mailto:painelukeb@gmail.com">painelukeb@gmail.com</a>
          <br />
          Linkedin:{" "}
          <a target="_" href="https://www.linkedin.com/in/luke-paine/">
            luke-paine
          </a>
          <br />
          Github:{" "}
          <a target="_" href="https://github.com/Luke-up/">
            Luke-up
          </a>
        </p>
      </div>
    );
}

export default AboutSection;
