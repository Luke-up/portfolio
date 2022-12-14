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
    let key = 0;
    return (
      <div className="w-100 text-center mx-auto">
        <div className="row">
          {AboutData.about.skills.map((skill) => {
            key++;
            return <SkillCard key={key} details={skill} />;
          })}
        </div>
      </div>
    );
  }
  //condition renders the 'education' layout
  //layout uses the about list component to render content in the center of the screen
  else if (props.topic === "education") {
    let key = 100;
    return (
      <div>
        <div className="w-100 text-center mx-auto fs-5">
          {AboutData.about.education.map((edu) => {
            key++;
            return <AboutList key={key} data={edu} />;
          })}
        </div>
      </div>
    );
  }
  //condition renders the 'work' layout
  //layout uses the about list component to render content in the center of the screen
  else if (props.topic === "work") {
    let key = 200;
    return (
      <div>
        <div className="w-100 text-center mx-auto fs-5">
          {AboutData.about.work.map((job) => {
            key++;
            return <AboutList key={key} data={job} />;
          })}
        </div>
      </div>
    );
  }
  //condition renders the 'profile' layout
  //layout render a heading and single paragraph
  else {
    let key = 300;
    return (
      <div className="w-100 text-center mx-auto">
        {AboutData.about.profile.map((paragraph) => {
          key++;
          return (
            <p key={key} className="text-start fs-5 my-4">
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
}

export default AboutSection;
