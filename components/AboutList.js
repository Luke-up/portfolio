//this component is used in AboutSection to render content in the center of the screen
function AboutList(props) {
  return (
    <div>
      <h3>{props.data.name}</h3>
      <p>{props.data.date}</p>
      <hr />
      <p className="font-normal fs-6">{props.data.description}</p>
      {props.data.points.map((point) => {
        return (
          <div key={point} className="ms-3">
            <p className="text-start font-normal fs-6">•{point}</p>
          </div>
        );
      })}
      <hr />
    </div>
  );
}

export default AboutList;
