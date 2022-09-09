import Navigation from "../components/Navigation";
import AboutSection from "../components/AboutSection";
import Sidemenu from "../components/Sidemenu";
import AboutCard from "../components/AboutCard";
import React, { useEffect } from "react";
import AboutData from "../about.json";

//function renders the about page when selected in navbar
//function conditionally renders a selection menu on first load
function About() {
  const [Topic, setTopic] = React.useState("");
  const [listItems, setListItems] = React.useState([]);

  //function creates an array of option links
  useEffect(() => {
    let newArray = [];
    Object.keys(AboutData.about).forEach((key) => {
      newArray.push(key);
    });
    setListItems(newArray);
  }, []);

  //renders a layout when topic is selected
  if (Topic) {
    return (
      <div>
        <Navigation setTopic={setTopic} />
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6 px-3">
            <AboutSection topic={Topic} />
          </div>
          <div className="col-3 px-3 text-center">
            <Sidemenu setTopic={setTopic} listItems={listItems} />
          </div>
        </div>
      </div>
    );
  }
  //render a selection menu before topic is selected
  else {
    return (
      <div>
        <Navigation />
        <div className="w-75 text-center mx-auto">
          <div className="container-fluid border-top border-bottom border-dark border-4 rounded my-3 py-2 text-center">
            <h1>about</h1>
          </div>
          <div className="row">
            <AboutCard
              section="profile"
              img="/images/profile.jpg"
              setTopic={setTopic}
            />
            <AboutCard
              section="skills"
              img="/images/skills.jpg"
              setTopic={setTopic}
            />
            <AboutCard
              section="education"
              img="/images/education.jpg"
              setTopic={setTopic}
            />
            <AboutCard
              section="work"
              img="/images/work.jpg"
              setTopic={setTopic}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
