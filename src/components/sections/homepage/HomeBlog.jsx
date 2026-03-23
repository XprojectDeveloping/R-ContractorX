import { Link } from "react-router-dom";
import "../../../styles/homepage/_homepage_blog.scss";
import { useEffect, useState } from "react";

function HomeBlog({ blog, dataCard, btnTo }) {
  const [curretDate, setCurretDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurretDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="blog">
        <span>{blog?.blogTitleUp}</span>

        <div className="blog-title">
          <h3>{blog?.blogTitleBottom}</h3>

          <div>
            <Link to={blog?.btnTo} className="one">
              {blog?.blogBtn}
            </Link>
          </div>
        </div>

        <div className="blog-post-cards">
          <div className="blog-post-card-left">
            <div className="blog-post-card-left-img">
              <img src={blog?.blogImg} alt={blog?.blogAlt} />
            </div>
            <div className="blog-post-card-left-text">
              <p>{blog?.blogText}</p>
              <div className="time">
                <span>{curretDate.getDate()}/</span>
                <span>
                  {"0"}
                  {curretDate.getMonth() + 1}/
                </span>
                <span>{curretDate.getFullYear()}</span>
              </div>
            </div>
          </div>
          <div className="blog-post-card-rigth">
            {dataCard &&
              dataCard?.map((item) => {
                return (
                  <div className="blog-post-card-rigth-cards" key={item?.id}>
                    <div>
                      <img src={item?.cardImg} alt={item?.cardAlt} />
                    </div>
                    <div>
                      <p>{item?.cardTitle}</p>
                      <div className="time">
                        <span>{curretDate.getDate()}/</span>
                        <span>0{curretDate.getMonth() + 1}/</span>
                        <span>{curretDate.getFullYear()}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeBlog;
