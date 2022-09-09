import Image from "next/image";
function AboutCard(props) {
  return (
    <div className="col" onClick={() => props.setTopic(props.section)}>
      <div className="card my-3 p-2">
        <h2>{props.section}</h2>
        <div className="w-50 mx-auto">
          <Image width={900} height={800} src={props.img} />
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
