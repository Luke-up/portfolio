import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <div className="w-75 text-center mx-auto">
        <div className="container-fluid rounded my-3 py-2 text-center my-5 ">
          <h1>
            ~ portfolio of works
            <span className="fs-5 font-monospace">
              <br />
              Luke Paine
            </span>
          </h1>
          <p className="fs-4 w-50 mx-auto text-start my-5">
            This website contains various websites and apps that I have made ,
            as well as background details, education, experience and information
            on myself. For more information or to get in touch, please contact
            me on any of the following platforms and I will get back to you as
            soon as possible.
          </p>
        </div>
        <p>Contact details</p>
      </div>
    </div>
  );
}
