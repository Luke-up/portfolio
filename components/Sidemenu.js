import React from "react";

//top tab navigation for about sections
function Sidemenu(props) {
  function setTopic(section) {
    props.setTopic(section);
  }

  function getTabClass(section) {
    const activeClass =
      props.currentTopic === section ? "about-tab-active" : "";
    return `about-tab-button ${activeClass}`;
  }

  return (
    <div className="about-tabs" role="tablist" aria-label="About sections">
      <button
        type="button"
        onClick={() => {
          setTopic("profile");
        }}
        className={getTabClass("profile")}
      >
        Profile
      </button>
      <button
        type="button"
        onClick={() => {
          setTopic("work");
        }}
        className={getTabClass("work")}
      >
        Work Experience
      </button>
      <button
        type="button"
        onClick={() => {
          setTopic("education");
        }}
        className={getTabClass("education")}
      >
        Education
      </button>
    </div>
  );
}

export default Sidemenu;
