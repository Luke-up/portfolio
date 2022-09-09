function SkillCard(props) {
  console.log(props.details.img);
  return (
    <div className="col-lg-3">
      <span>
        <img src={props.details.img} className="img-thumbnail border-light" />
      </span>
      <h2>{props.details.skill}</h2>
      <p>
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
