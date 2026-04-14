import Navigation from "../components/Navigation";
import AboutSection from "../components/AboutSection";
import Sidemenu from "../components/Sidemenu";
import React from "react";
import Head from "next/head";

//about page with sticky top section tabs
function About() {
  const [Topic, setTopic] = React.useState("profile");
  const topicTitles = {
    profile: "Profile",
    work: "Work Experience",
    education: "Education",
  };
  const topicTitle = topicTitles[Topic] || "About";

  return (
    <div className="site-layout">
      <Head>
        <title>About | Luke Paine Portfolio</title>
        <meta
          name="description"
          content="Profile, work experience, and education for Luke Paine."
        />
      </Head>
      <Navigation type="about" />
      <main className="page-content">
        <div className="about-layout">
          <p className="about-section-label font-hand mb-1">About</p>
          <h1 className="mb-3">{topicTitle}</h1>
          <div className="about-tabs-sticky">
            <Sidemenu setTopic={setTopic} currentTopic={Topic} />
          </div>
          <div className="about-section-wrap">
            <AboutSection topic={Topic} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
