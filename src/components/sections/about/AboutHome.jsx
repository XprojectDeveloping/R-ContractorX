import "../../../styles/about/_about-home.scss";

function AboutHome({ about }) {
  return (
    <>
      <div className="about-home">
        <div className="about-img">
          <img src={about?.aboutImg} alt={about?.aboutAlt} />
        </div>
        <div className="about-text">
          <h3>{about?.aboutTitleBottom}</h3>

          <p>{about?.aboutText2}</p>
        </div>
      </div>
    </>
  );
}
export default AboutHome;
