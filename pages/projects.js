import Navigation from "../components/Navigation";
import React, { useEffect } from "react";

function Project() {
  return (
    <div>
      <Navigation />
      <div className="w-75 text-center mx-auto">
        <div className="container-fluid border-top border-bottom border-dark border-4 rounded my-3 py-2 text-center">
          <h1>projects</h1>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="card w-75 mx-auto my-3">
              <h2>React game</h2>
              <p>Description of the app</p>
              <p>picture</p>
            </div>
          </div>
          <div className="col-6">
            <div className="card w-75 mx-auto my-3">
              <h2>Itunes-search web app</h2>
              <p>Description of the app</p>
              <p>picture</p>
            </div>
          </div>
          <div className="col-6">
            <div className="card w-75 mx-auto my-3">
              <h2>Online bakery</h2>
              <p>Description of the app</p>
              <p>picture</p>
            </div>
          </div>
          <div className="col-6">
            <div className="card w-75 mx-auto my-3">
              <h2>Colour store</h2>
              <p>Description of the app</p>
              <p>picture</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
