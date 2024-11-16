import React from "react";
import style from "./style.module.scss";
import winner1 from "../../assets/images/winners/1.png";
import winner2 from "../../assets/images/winners/2.png";
import winner3 from "../../assets/images/winners/3.png";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";

const Winners = () => {
  return (
    <section className={style.winners}>
      <div className="container">
        <div className={style.winners__wrapper}>
          <h2>Победители</h2>

          <Swiper
            modules={[Pagination]}
            spaceBetween={30} // Отступ между слайдами
            slidesPerView={3} // Изначально показываем два слайда
            breakpoints={{
              // Указываем, что на ширине 600 и меньше будет 1 слайд
              1200: {
                slidesPerView: 3,
              },

              220: {
                slidesPerView: 1,
              },
            }}
            loop={true}
            grabCursor={true}
            pagination={{
              el: ".custom-pagination-4",
              type: "bullets",
              clickable: true,
            }}
          >
            <SwiperSlide className={style.winner__item}>
              <div className={style.winners__image}>
                <img src={winner1} alt="winner 1" />
              </div>
              <p>Игорь Прогожников</p>
              <div className={style.winners__sum}>
                <p>1 700 000₽</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={style.winner__item}>
              <div className={style.winners__image}>
                <img src={winner2} alt="winner 1" />
              </div>
              <p>Илья Воснесевский</p>
              <div className={style.winners__sum}>
                <p>1 279 000₽</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={style.winner__item}>
              <div className={style.winners__image}>
                <img src={winner3} alt="winner 1" />
              </div>
              <p>Маргарита Власова</p>
              <div className={style.winners__sum}>
                <p>880 000₽</p>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="custom-pagination-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Winners;
