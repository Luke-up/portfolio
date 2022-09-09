function AboutList(props) {
  return (
    <div>
      <h3>{props.data.name}</h3>
      <p>{props.data.date}</p>
      <hr />
      <p>{props.data.description}</p>
      {props.data.points.map((point) => {
        return (
          <div key={point} className="ms-3">
            <p className="text-start">•{point}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AboutList;
