import Link from "next/link";
import Image from "next/image";

//renders a project tile with overlay text
function ProjectCard(props) {
  const { title, cardSummary, img, slug, tagline } = props.data;

  return (
    <div className="col-12 col-md-6">
      <Link href={`/projects/${slug}`}>
        <a className="project-tile" aria-label={`Open ${title} project details`}>
          <Image src={img} alt={`${title} preview`} layout="fill" objectFit="cover" />
          <div className="project-tile-overlay">
            <p className="project-meta mb-1">{tagline}</p>
            <h2 className="mb-2">{title}</h2>
            <p className="mb-0">{cardSummary}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default ProjectCard;
