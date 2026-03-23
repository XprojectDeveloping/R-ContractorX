import { Link } from "react-router-dom";
import "../../../styles/homepage/_homepage_about.scss";
function HomeAbout({ about }) {
  return (
    <>
      <div className="about">
        <div className="about-img">
          <img src={about?.aboutImg} alt={about?.aboutAlt} />
        </div>
        <div className="about-text">
          <span>{about?.aboutTitleUp}</span>

          <div className="about-title">
            <h3>{about?.aboutTitleBottom}</h3>
            <p>{about?.aboutText}</p>
          </div>

          <div className="about-num">
            <div className="num">
              <p className="top">
                <span>{"+"}</span>
                {"350"}
              </p>
              <p className="up">{"Executed Projects"}</p>
            </div>
            <div className="num">
              <p className="top">
                {"12"} <span>{"Y"}</span>
              </p>
              <p className="up">{"Experience"}</p>
            </div>
            <div className="num">
              <p className="top">
                <span>{"+"}</span>
                {"400"}
              </p>
              <p className="up">{"Satisfied Clients"}</p>
            </div>
          </div>

          <Link to={about?.btnTo || ""}>{about?.aboutBtn}</Link>
        </div>
      </div>
    </>
  );
}
export default HomeAbout;
