import "../../../styles/about/_about-home.scss";

function AboutHome({ img, alt, title, text }) {
  return (
    <>
      <div className="about-home">
        <div className="about-img">
          <img src={img} alt={alt} />
        </div>
        <div className="about-text">
          <h3>{title}</h3>

          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
export default AboutHome;
