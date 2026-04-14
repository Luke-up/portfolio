import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import AboutData from "../../about.json";

function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const project = AboutData.projects.find((item) => item.slug === slug);
  const galleryImages = project?.images?.length ? project.images : [project?.img];
  const projectLinks =
    project?.links?.length
      ? project.links
      : [
          ...(project?.appLink ? [{ label: "Live app", url: project.appLink }] : []),
          ...(project?.codeLink ? [{ label: "Source code", url: project.codeLink }] : []),
        ];

  if (!project) {
    return (
      <div className="site-layout">
        <Navigation type="projects" />
        <main className="page-content">
          <div className="page-width py-4">
            <h1>Project not found</h1>
            <p>
              <Link href="/projects">
                <a>Back to projects</a>
              </Link>
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="site-layout">
      <Head>
        <title>{project.title} | Luke Paine Portfolio</title>
        <meta name="description" content={project.overview} />
      </Head>
      <Navigation type="projects" />
      <main className="page-content">
        <article className="page-width py-4">
          <div className="project-detail-layout">
            <div>
              <p className="project-meta mb-2">{project.tagline}</p>
              <h1>{project.title}</h1>
              <p className="fs-5">{project.overview}</p>
              {projectLinks.length ? (
                <p className="project-links-inline">
                  {projectLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </p>
              ) : null}

              {project.frontend ? (
                <section className="project-detail-block">
                  <h3>{project.frontend.title}</h3>
                  <p>{project.frontend.summary}</p>
                  <p className="project-meta">{project.frontend.stack.join(" · ")}</p>
                  <ul className="about-bullet-list">
                    {project.frontend.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {project.backend ? (
                <section className="project-detail-block">
                  <h3>{project.backend.title}</h3>
                  <p>{project.backend.summary}</p>
                  <p className="project-meta">{project.backend.stack.join(" · ")}</p>
                  <ul className="about-bullet-list">
                    {project.backend.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {project.highlights ? (
                <section className="project-detail-block">
                  <h3>Highlights</h3>
                  <p className="project-meta">{project.stack.join(" · ")}</p>
                  <ul className="about-bullet-list">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              <p className="mt-4">
                <Link href="/projects">
                  <a>Back to projects</a>
                </Link>
              </p>
            </div>

            <aside className="project-detail-gallery">
              {galleryImages.map((imagePath) => (
                <div className="project-detail-image" key={imagePath}>
                  <Image
                    src={imagePath}
                    alt={`${project.title} screenshot`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </aside>
          </div>
        </article>
      </main>
    </div>
  );
}

export default ProjectDetail;
