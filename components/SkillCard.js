//this component is used to render cards on the about/skills page
function SkillCard(props) {
  return (
    <div className="col-lg-6">
      <span>
        <img src={props.details.img} className="img-thumbnail border-light" />
      </span>
      <h2>{props.details.skill}</h2>
      <p className="fs-5">
        {props.details.description}{" "}
        <span>
          {props.details.link ? (
            <a href={props.details.link} target="_">
              Link
            </a>
          ) : (
            ""
          )}
        </span>
      </p>
    </div>
  );
}

export default SkillCard;
