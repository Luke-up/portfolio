import Link from "next/link";
import ProjectsSVG from "./ProjectsSVG";
import AboutSVG from "./AboutSVG";
import HomeSVG from "./HomeSVG";

//navigation bar with links to home, about and project list page
//navbar is always at the top of each page
function Navigation(props) {
  if (props.type === "home") {
    return (
      <div className="container-fluid p-3 sticky-top">
        <div className="row my-5">
          <div className="col">
            <Link href="/projects">
              <a className="float-start nav-link ms-5">
                <ProjectsSVG />
              </a>
            </Link>
          </div>
          <div className="col">
            <Link href="/about">
              <a className="float-end nav-link me-5">
                <AboutSVG />
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  if (props.type === "projects") {
    return (
      <div className="container-fluid p-3 sticky-top">
        <div className="row my-5">
          <div className="col">
            <Link href="/">
              <a className="float-start nav-link ms-5">
                <HomeSVG />
              </a>
            </Link>
          </div>
          <div className="col">
            <Link href="/about">
              <a className="float-end nav-link me-5">
                <AboutSVG />
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container-fluid p-3 sticky-top">
        <div className="row my-5">
          <div className="col">
            <Link href="/">
              <a className="float-start nav-link ms-5">
                <HomeSVG />
              </a>
            </Link>
          </div>
          <div className="col">
            <Link href="/projects">
              <a className="float-end nav-link me-5">
                <ProjectsSVG />
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
