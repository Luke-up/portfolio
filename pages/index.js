import Navigation from "../components/Navigation";
import Head from "next/head";

//render homepage landing page
//simple welcome message, contact options and navigation bar
export default function Home() {
  return (
    <div className="site-layout">
      <Head>
        <title>Luke Paine | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of web development projects and background information for Luke Paine."
        />
      </Head>
      <Navigation type="home" />
      <main className="page-content">
        <div className="home-screen text-center mx-auto page-width">
          <div className="home-title-wrap">
            <h1 className="mb-0">
              ~ portfolio of works
              <span className="fs-5 d-block mt-2">Luke Paine</span>
            </h1>
          </div>
          <p className="home-contact-line fs-5 mb-0">
            Email:{" "}
            <a href="mailto:painelukeb@gmail.com">painelukeb@gmail.com</a>
            {"  "}❖{"  "}Linkedin:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/luke-paine/"
            >
              luke-paine
            </a>
            {"  "}❖{"  "}Github:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Luke-up/"
            >
              Luke-up
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
