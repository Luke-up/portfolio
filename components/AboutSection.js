import React, { useEffect } from "react";

function AboutSection(props) {
  if (props.topic === "skills") {
    return (
      <div className="w-100 text-center mx-auto">
        <div className="container-fluid border-top border-bottom border-dark border-4 rounded my-3 py-2 text-center">
          <h1>{props.topic}</h1>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <img
              src="/images/html.svg"
              className="img-thumbnail border-light"
            />
            <p>
              Can compile HTML web pages and competently render HTML elements
              dynamically from Javascript.
            </p>
          </div>
          <div className="col-lg-3">
            <img src="/images/css.svg" className="img-thumbnail border-light" />
            <p>
              Skilled at using css styles for indidual elements as well as page
              layout using grids. I also have experience in create animations
              and using svg's.
            </p>
          </div>
          <div className="col-lg-3">
            <img
              src="/images/bootstrap.svg"
              className="img-thumbnail border-light"
            />
            <p>
              Competent at using the bootstrap library and layout components for
              responsive website design.
            </p>
          </div>
          <div className="col-lg-3">
            <img src="/images/js.svg" className="img-thumbnail border-light" />
            <p>
              Experience in using javascript syntax, previous projects include
              functions, looping, iterables, objects and arrays, and handling
              events.
            </p>
          </div>
          <div className="col-lg-3">
            <img
              src="/images/jquery.svg"
              className="img-thumbnail border-light"
            />
            <p>
              Implimented the Jquery library to improve efficiency in various
              javascript projects.
            </p>
          </div>
          <div className="col-lg-3">
            <img
              src="/images/node.svg"
              className="img-thumbnail border-light"
            />
            <p>
              Have built backend servers in Node to handle API requests as part
              of fullstack web applications.{" "}
            </p>
          </div>
          <div className="col-lg-3">
            <img
              src="/images/react.svg"
              className="img-thumbnail border-light"
            />
            <p></p>
          </div>
          <div className="col-lg-3">
            <img
              src="/images/express.svg"
              className="img-thumbnail border-light"
            />
            <p></p>
          </div>
          <div className="col-lg-3">
            <img
              src="/images/github.svg"
              className="img-thumbnail border-light"
            />
            <p></p>
          </div>
          <div className="col-lg-3">
            <img
              src="/images/postman.svg"
              className="img-thumbnail border-light"
            />
            <p></p>
          </div>
          <div className="col-lg-3">
            <img
              src="/images/mongodb.svg"
              className="img-thumbnail border-light"
            />
            <p></p>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="w-100 text-center mx-auto">
        <div className="container-fluid border-top border-bottom border-dark border-4 rounded my-3 py-2 text-center">
          <h1>{props.topic}</h1>
        </div>
        <p>{props.content}</p>
      </div>
    );
}

export default AboutSection;
