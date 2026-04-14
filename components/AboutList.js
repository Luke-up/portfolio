//this component is used in AboutSection to render content in the center of the screen
function AboutList(props) {
  if (props.variant === "work") {
    return (
      <div className="mb-5">
        <div className="work-company-row">
          <h3 className="mb-0">{props.data.name}</h3>
          <p className="project-meta mb-0">{props.data.date}</p>
        </div>

        {props.data.roles.map((role) => {
          return (
            <div key={role.title} className="mb-3">
              <div className="work-role-row">
                <p className="mb-1">{role.title}</p>
                {role.location ? (
                  <p className="project-meta mb-1">{role.location}</p>
                ) : null}
              </div>
              {role.points.map((point) => {
                return (
                  <p key={point} className="text-start font-normal fs-6 ms-3 mb-1">
                    •{point}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="mb-5">
      <div className="work-company-row">
        <h3 className="mb-0">{props.data.name}</h3>
        <p className="project-meta mb-0">{props.data.date}</p>
      </div>
      {props.data.location ? <p className="project-meta mb-2">{props.data.location}</p> : null}
      <hr />
      <p className="font-normal fs-6 text-start">{props.data.description}</p>
      {props.data.points?.length
        ? props.data.points.map((point) => {
            return (
              <div key={point} className="ms-3">
                <p className="text-start font-normal fs-6">•{point}</p>
              </div>
            );
          })
        : null}
      {props.data.link ? (
        <p>
          <a href={props.data.link} target="_blank" rel="noopener noreferrer">
            Learn more
          </a>
        </p>
      ) : null}
      <hr />
    </div>
  );
}

export default AboutList;
