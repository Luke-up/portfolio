import React from "react";

//function renders a menu on the right side of screen for quick navigation on the about.js page
function Sidemenu(props) {
  return (
    <div className="potition-absolute">
      <div className="container-fluid rounded my-3 py-2 text-center">
        <a
          onClick={() => {
            props.setTopic("");
          }}
        >
          <h1>About</h1>
        </a>
      </div>
      {props.listItems.map((section) => {
        return (
          <a
            key={section}
            onClick={() => props.setTopic(section)}
            className="w-75 my-3 fs-3 nav-link mx-auto"
          >
            {section}
          </a>
        );
      })}
    </div>
  );
}

export default Sidemenu;
