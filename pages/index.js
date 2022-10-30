import Navigation from "../components/Navigation";
import Head from "next/head";

//render homepage landing page
//simple welcome message, contact options and navigation bar
export default function Home() {
  return (
    <div>
      <Navigation type="home" />
      <div className="w-75 text-center mx-auto">
        <div className="container-fluid rounded py-2 text-center ">
          <div className="full-screen">
            <h1 className="screen-middle">
              ~ portfolio of works
              <span className="fs-5">
                <br />
                Luke Paine
              </span>
            </h1>
          </div>

          <p className="fs-4 w-75 mx-auto text-center">
            This website contains various websites and apps that I have made.{" "}
            <br />
            As well as background details, education, experience and information
            on myself.
            <br />
            For more information or to get in touch, please contact me on any of
            the following platforms and I will get back to you as soon as
            possible.
          </p>
          <p className="fs-4 w-50 mx-auto my-5">
            Email:{" "}
            <a href="mailto:painelukeb@gmail.com">painelukeb@gmail.com</a>
            <br />
            Linkedin:{" "}
            <a target="_" href="https://www.linkedin.com/in/luke-paine/">
              luke-paine
            </a>
            <br />
            Github:{" "}
            <a target="_" href="https://github.com/Luke-up/">
              Luke-up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
