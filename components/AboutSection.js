import React from "react";
//All data is kept in the AboutData json object
import AboutData from "../about.json";
import AboutList from "./AboutList";

//main component used in about.js page
//renders information in the center of the screen
function AboutSection(props) {
  if (props.topic === "education") {
    return (
      <div>
        <div className="w-100 text-start mx-auto fs-5">
          {AboutData.about.education.map((edu) => {
            return <AboutList key={edu.name} data={edu} variant="education" />;
          })}
        </div>
      </div>
    );
  }
  if (props.topic === "work") {
    return (
      <div>
        <div className="w-100 text-start mx-auto fs-5">
          {AboutData.about.work.map((job) => {
            return <AboutList key={job.name} data={job} variant="work" />;
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="w-100 text-start mx-auto">
      <h3>{AboutData.about.profile.name}</h3>
      <p className="fs-5 mb-4">
        <a href={`mailto:${AboutData.about.profile.email}`}>
          {AboutData.about.profile.email}
        </a>{" "}
        ❖ {AboutData.about.profile.phone} ❖ {AboutData.about.profile.location} ❖{" "}
        {AboutData.about.profile.jlpt}
      </p>

      <h3>Technical Skills</h3>
      <ul className="about-bullet-list">
        {AboutData.about.technicalSkills.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <h3>Additional</h3>
      <ul className="about-bullet-list">
        {AboutData.about.additional.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default AboutSection;
