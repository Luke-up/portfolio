import Navigation from "../components/Navigation";
import AboutSection from "../components/AboutSection";
import Sidemenu from "../components/Sidemenu";
import React, { useEffect } from "react";
import AboutData from "../about.json";

function About() {
  const [Topic, setTopic] = React.useState("");
  const [content, setContent] = React.useState("");
  const [listItems, setListItems] = React.useState([]);

  useEffect(() => {
    if (Topic === "profile") {
      setContent(AboutData.profile);
    } else if (Topic === "personal") {
      setContent(AboutData.personal);
    } else if (Topic === "skills") {
      setContent(AboutData.skills);
    } else if (Topic === "education") {
      setContent(AboutData.education);
    } else {
      setContent(AboutData.work);
    }
  }, [Topic]);

  useEffect(() => {
    let newArray = [];
    Object.keys(AboutData).forEach((key) => {
      newArray.push(key);
    });
    setListItems(newArray);
  }, []);

  if (Topic) {
    return (
      <div>
        <Navigation setTopic={setTopic} />
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6 px-3">
            <AboutSection topic={Topic} content={content} />
          </div>
          <div className="col-3 px-3 text-center">
            <Sidemenu setTopic={setTopic} listItems={listItems} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navigation />
        <div className="w-75 text-center mx-auto">
          <div className="container-fluid border-top border-bottom border-dark border-4 rounded my-3 py-2 text-center">
            <h1>about</h1>
          </div>
          <div className="row">
            {listItems.map((section) => {
              return (
                <div
                  key={section}
                  onClick={() => setTopic(section)}
                  className="col"
                >
                  <div className="card w-75 mx-auto my-3">
                    <h1>{section}</h1>
                    <p>Description section</p>
                    <p>picture</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
