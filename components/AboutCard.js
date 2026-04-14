//function renders a small card on the about.js page
function AboutCard(props) {
  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <button
        type="button"
        className="about-card my-2 p-3"
        onClick={() => {
          props.setTopic(props.section);
        }}
      >
        <h2 className="mb-2 text-capitalize">{props.section}</h2>
        <div className="w-50 mx-auto">
          <img
            className="aboutmenu-icon"
            src={props.img}
            alt={`${props.section} section icon`}
          />
        </div>
      </button>
    </div>
  );
}

export default AboutCard;
