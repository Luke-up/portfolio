import Link from "next/link";

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
          <a>Name header</a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
