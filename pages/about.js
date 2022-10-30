import Navigation from "../components/Navigation";
import AboutSection from "../components/AboutSection";
import Sidemenu from "../components/Sidemenu";
import AboutCard from "../components/AboutCard";
import React, { useEffect } from "react";
import Head from "next/head";

//function renders the about page when selected in navbar
//function conditionally renders a selection menu on first load
function About() {
  const [Topic, setTopic] = React.useState("");

  useEffect(() => {
    if (Topic) {
      window.scrollTo(0, 0);
    }
  }, [Topic]);

  //renders a layout when topic is selected
  if (Topic) {
    return (
      <div>
        <Navigation />
        <div className="row">
          <div className="col-1"></div>
          <div className="col-3">
            <div className="px-3 mt-1 ms-5 text-center position-fixed">
              <Sidemenu setTopic={setTopic} />
            </div>
          </div>
          <div className="col-6">
            <div className="px-3">
              <AboutSection topic={Topic} />
            </div>
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
          <div className="container-fluid my-5 py-2 text-center">
            <h1>About</h1>
          </div>
          <div className="row">
            <AboutCard
              section="profile"
              img="/images/profile.png"
              setTopic={setTopic}
            />
            <AboutCard
              section="skills"
              img="/images/skills.png"
              setTopic={setTopic}
            />
            <AboutCard
              section="education"
              img="/images/education.png"
              setTopic={setTopic}
            />
            <AboutCard
              section="work"
              img="/images/work.png"
              setTopic={setTopic}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
