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
            <div className="card w-75 mx-auto my-3 p-3 border-white">
              <h2>React game</h2>
              <p>
                This project is a version of Minesweeper that I built using
                create-react-app. It has a simple start/settings screen and a
                game screen. <br />
                <span>
                  <a href="https://look-minesweeper.herokuapp.com/" target="_">
                    app
                  </a>
                  {", "}
                  <a href="https://github.com/Luke-up/Minesweeper" target="_">
                    code
                  </a>
                </span>
              </p>
              <img src="/images/minesweeper.jpg" />
            </div>
          </div>
          <div className="col-6">
            <div className="card w-75 mx-auto my-3 p-3 border-white">
              <h2>Itunes-search web app</h2>
              <p>
                This application is a react website using the publically
                available Itunes-search API, it has various categories of media
                which can be selected, further search perameters can be defined
                according to media.
                <br />
                <span>
                  <a href="https://itunes-searching.herokuapp.com/" target="_">
                    app
                  </a>
                  {", "}
                  <a href="https://github.com/Luke-up/itunes-search" target="_">
                    frontend code
                  </a>
                  {", "}
                  <a
                    href="https://github.com/Luke-up/apple-search-server"
                    target="_"
                  >
                    backend code
                  </a>
                </span>
              </p>
              <img src="/images/itunesApp.jpg" className="w-75 mx-auto" />
            </div>
          </div>
          <hr className="" />
          <div className="col-6">
            <div className="card w-75 mx-auto my-3 p-3 border-white">
              <h2>Online bakery</h2>
              <p>
                This website serves as an e-commerce plaform selling cakes. The
                design elements follow the bakery theme and the Navbar is based
                on oven controls. It has a simple layout of catalogue, contact,
                about and shopping cart pages. Javascript provides functionality
                for the cart.
                <br />
                <span>
                  <a
                    href="https://luke-up.github.io/E-store/index.html"
                    target="_"
                  >
                    app
                  </a>
                  {", "}
                  <a href="https://github.com/Luke-up/E-store" target="_">
                    code
                  </a>
                </span>
              </p>
              <img src="/images/royalPetal.jpg" className="w-75 mx-auto" />
            </div>
          </div>
          <div className="col-6">
            <div className="card w-75 mx-auto my-3 p-3 border-white">
              <h2>Colour store</h2>
              <p>
                This website was designed around the concept of a shop that only
                sells pencils and a pen. The design elements reflect the subject
                matter as well as showcasing usage of css, bootstrap and svg's
                inside the HTML.
                <br />
                <span>
                  <a
                    href="https://luke-up.github.io/Sketch-Pencils-eStore/"
                    target="_"
                  >
                    app
                  </a>
                  {", "}
                  <a
                    href="https://github.com/Luke-up/Sketch-Pencils-eStore"
                    target="_"
                  >
                    code
                  </a>
                </span>
              </p>
              <img src="/images/sketch.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
