import { Link } from "react-router-dom";
import "../../../styles/homepage/_homepage_projects.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
function HomeProjects({ projects, dataCard }) {
  return (
    <>
      <div className="projects">
        <span>{projects?.projectsTitleUp}</span>

        <div className="projects-title">
          <h3>{projects?.projectsTitleBottom}</h3>

          <div className="projects-buttons">
            <Link className="one" to={"/"}>
              {projects?.projectsBtn1}
            </Link>

            <Link className="two" to={projects?.btnTo || "/"}>
              {projects?.projectsBtn2}
            </Link>
          </div>
        </div>
        <div className="projects-cards">
          <Swiper
            slidesPerView={1}
            spaceBetween={60}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              480: { slidesPerView: 1, spaceBetween: 0 },
              566: { slidesPerView: 1, spaceBetween: 0 },
              640: { slidesPerView: 2, spaceBetween: 0 },
              767: { slidesPerView: 1, spaceBetween: 0 },
              1024: { slidesPerView: 2, spaceBetween: 60 },
              1280: { slidesPerView: 2, spaceBetween: 60 },
            }}
            loop={true}
            modules={[Autoplay]}
          >
            {dataCard &&
              dataCard?.map((item) => {
                return (
                  <SwiperSlide key={item?.id}>
                    <div className="projects-card">
                      <img src={item?.cardImg} alt={item?.cardAlt} />

                      <div className="projects-card-title">
                        <h3>{item?.cardTitle}</h3>
                        <p>{item?.cardText}</p>

                        <div className="bottom">
                          <img src={item?.cardIco} alt={item?.cardIcoAlt} />
                          <p>{item?.cardBottomTitle}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
export default HomeProjects;
