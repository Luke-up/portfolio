import React, { useEffect } from "react";

//function renders a menu on the right side of screen for quick navigation on the about.js page
function Sidemenu(props) {
  function setTopic(section) {
    props.setTopic(section);
  }

  return (
    <div className="potition-absolute">
      <div>
        <a
          onClick={() => {
            setTopic("profile");
          }}
          className="w-75 font-hand my-3 fs-3 text-decoration-none text-black"
        >
          Profile <br />
          <img src="/images/profile.png" className="sidemenu-icon" />
        </a>
      </div>
      <div>
        <a
          onClick={() => {
            setTopic("skills");
          }}
          className="w-75 font-hand my-3 fs-3 text-decoration-none text-black"
        >
          Skills <br />
          <img src="/images/skills.png" className="sidemenu-icon" />
        </a>
      </div>
      <div>
        <a
          onClick={() => {
            setTopic("work");
          }}
          className="w-75 font-hand my-3 fs-3 text-decoration-none text-black"
        >
          Work <br />
          <img src="/images/work.png" className="sidemenu-icon" />
        </a>
      </div>
      <div>
        <a
          onClick={() => {
            setTopic("education");
          }}
          className="w-75 font-hand my-3 fs-3 text-decoration-none text-black bigOnHover"
        >
          Education <br />
          <img src="/images/education.png" className="sidemenu-icon" />
        </a>
      </div>
    </div>
  );
}

export default Sidemenu;
