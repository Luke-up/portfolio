//renders a single project on the projects page
function ProjectCard(props) {
  return (
    <div className="col-6">
      <div className="card w-75 mx-auto my-3 p-3 border-white">
        <h2>{props.data.title}</h2>
        <p>
          {props.data.description}
          <br />
          <span>
            <a href={props.data.codeLink} target="_">
              code
            </a>
          </span>
        </p>
        <a href={props.data.appLink} target="_">
          <img className="app-pictures w-100" src={props.data.img} />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
