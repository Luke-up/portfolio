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
        <div className="container-fluid border-top border-bottom border-dark border-4 rounded my-3 py-2 text-center">
          <h1>{props.topic}</h1>
        </div>
        <div className="row">
          <SkillCard details={AboutData.skills.HTML} />
          <SkillCard details={AboutData.skills.CSS} />
          <SkillCard details={AboutData.skills.Bootstrap} />
          <SkillCard details={AboutData.skills.jQuery} />
          <SkillCard details={AboutData.skills.Node} />
          <SkillCard details={AboutData.skills.React} />
          <SkillCard details={AboutData.skills.Express} />
          <SkillCard details={AboutData.skills.GitHub} />
          <SkillCard details={AboutData.skills.Postman} />
          <SkillCard details={AboutData.skills.MongoDB} />
        </div>
      </div>
    );
  }
  //condition renders the 'education' layout
  //layout uses the about list component to render content in the center of the screen
  else if (props.topic === "education") {
    return (
      <div>
        <div className="w-100 text-center mx-auto">
          <div className="container-fluid border-top border-bottom border-dark border-4 rounded my-3 py-2 text-center">
            <h1>{props.topic}</h1>
          </div>
          <AboutList data={AboutData.about.education.hyperionDev} />
          <hr />
          <AboutList data={AboutData.about.education.uct} />
        </div>
      </div>
    );
  }
  //condition renders the 'work' layout
  //layout uses the about list component to render content in the center of the screen
  else if (props.topic === "work") {
    return (
      <div>
        <div className="w-100 text-center mx-auto">
          <div className="container-fluid border-top border-bottom border-dark border-4 rounded my-3 py-2 text-center">
            <h1>{props.topic}</h1>
          </div>
          <AboutList data={AboutData.about.work.bec} />
          <hr />
          <AboutList data={AboutData.about.work.cli} />
        </div>
      </div>
    );
  }
  //condition renders the 'profile' layout
  //layout render a heading and single paragraph
  else
    return (
      <div className="w-100 text-center mx-auto">
        <div className="container-fluid border-top border-bottom border-dark border-4 rounded my-3 py-2 text-center">
          <h1>{props.topic}</h1>
        </div>
        <p className="text-start fs-5 my-4">{AboutData.about.profile}</p>
      </div>
    );
}

export default AboutSection;
