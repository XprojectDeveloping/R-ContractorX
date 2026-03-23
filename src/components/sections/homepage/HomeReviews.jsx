import { Swiper, SwiperSlide } from "swiper/react";
import "../../../styles/homepage/_homepape_reviews.scss";
import { Autoplay } from "swiper/modules";
function HomeReviews({ reviews, dataCard }) {
  return (
    <>
      <div className="reviews">
        <span>{reviews?.reviewsTitleUp}</span>

        <div className="reviews-title">
          <h3>{reviews?.reviewsTitleBottom}</h3>
        </div>

        <div className="reviews-cards">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              480: { slidesPerView: 1, spaceBetween: 0 },
              566: { slidesPerView: 1, spaceBetween: 0 },
              640: { slidesPerView: 1, spaceBetween: 0 },
              767: { slidesPerView: 1, spaceBetween: 0 },
              1024: { slidesPerView: 1, spaceBetween: 60 },
              1280: { slidesPerView: 1, spaceBetween: 60 },
            }}
            loop={true}
            modules={[Autoplay]}
          >
            {dataCard &&
              dataCard?.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className="reviews-card">
                      <div className="reviews-card-img">
                        <img src={item?.cardImg} alt={item?.cardAlt} />
                      </div>
                      <div className="reviews-card-text">
                        <h3>{item?.cardTitle}</h3>
                        <p>{item?.cardText}</p>

                        <div className="reviews-card-text-author">
                          <div className="text">
                            <h4>{item?.cardName}</h4>
                            <p>{item?.cardPosition}</p>
                          </div>
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
export default HomeReviews;
