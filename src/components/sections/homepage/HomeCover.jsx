import { Link } from "react-router-dom";
import "../../../styles/homepage/_homepage_cover.scss";
function HomeCover({ cover }) {
  return (
    <>
      <div className="cover">
        <div className="cover-img-container">
          <img
            className="cover-img"
            src={cover?.coverImg}
            alt={cover?.coverAlt}
          />
        </div>

        <div className="cover-title">
          <h3>{cover?.coverTitle1}</h3>
          <h3>{cover?.coverTitle2}</h3>
          <p>{cover?.coverText1}</p>
          <p>{cover?.coverText2}</p>

          <div className="cover-buttons">
            <Link className="one" to={"/"}>
              {cover?.coverBtn1}
            </Link>

            <Link className="two" to={cover.btnTo || "/"}>
              {cover?.coverBtn2}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeCover;
