import "../../../styles/homepage/_homepage_banner.scss";
import { Link } from "react-router-dom";
function HomeBanner({ home }) {
  return (
    <>
      <div className="banner">
        <div className="banner-img"></div>
        <div className="banner-text">
          <h1>{home?.bannerTitle}</h1>
          <p>{home?.bannerText}</p>
          <div className="banner-buttons">
            <Link to={home?.btnTo1 || "/"} className="one">
              {home?.bannerBtn1}
            </Link>

            <Link to={home?.btnTo2 || "/"} className="two">
              {home?.bannerBtn2}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeBanner;
