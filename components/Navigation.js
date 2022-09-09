import Link from "next/link";

//navigation bar with links to home, about and project list page
//navbar is always at the top of each page
function Navigation() {
  return (
    <div className="container-fluid bg-dark text-white p-3 my-1 sticky-top">
      <div className="row">
        <div className="col text-center my-auto">
          <Link href="/">
            <a className="nav-link text-white">Home</a>
          </Link>
        </div>
        <div className="col text-center my-auto">
          <Link href="/about">
            <a className="nav-link text-white">About</a>
          </Link>
        </div>
        <div className="col text-center my-auto">
          <Link href="/projects">
            <a className="nav-link text-white">Projects</a>
          </Link>
        </div>
        <div className="col text-center fs-3">
          <h1>Luke Paine</h1>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
