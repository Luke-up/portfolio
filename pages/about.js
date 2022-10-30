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

  //renders a layout when topic is selected
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

export default About;
