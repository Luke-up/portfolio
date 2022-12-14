import Image from "next/image";

//function renders a small card on the about.js page
function AboutCard(props) {
  return (
    <div
      className="col"
      onClick={() => {
        props.setTopic(props.section);
      }}
    >
      <div className="my-3 p-2">
        <h2>{props.section}</h2>
        <div className="w-50 mx-auto">
          <img className="aboutmenu-icon" src={props.img} />
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
