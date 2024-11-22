import React, { useRef } from "react";
import style from "./style.module.scss";
import winner1 from "../../assets/images/winners/1.png";
import winner2 from "../../assets/images/winners/2.png";
import winner3 from "../../assets/images/winners/3.png";
import winner4 from "../../assets/images/winners/4.png";
import winner5 from "../../assets/images/winners/5.png";
import winner6 from "../../assets/images/winners/6.png";
import winner7 from "../../assets/images/winners/7.png";
import winner8 from "../../assets/images/winners/8.png";
import winner9 from "../../assets/images/winners/9.png";
import winner10 from "../../assets/images/winners/10.png";
import winner11 from "../../assets/images/winners/11.png";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

const Winners = () => {
  const swiperRef = useRef(null);

  return (
    <section className={style.winners}>
      <div className="container">
        <div className={style.winners__wrapper}>
          <h2>Победители</h2>

          <Swiper
            modules={[Pagination]}
            spaceBetween={30} // Отступ между слайдами
            slidesPerView={3} // Изначально показываем два слайда
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper; // Сохраняем экземпляр Swiper в реф
            }}
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
              {/* <p></p> */}
              <div className={style.winners__sum}>
                <p>7 611 425₽</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={style.winner__item}>
              <div className={style.winners__image}>
                <img src={winner2} alt="winner 1" />
              </div>
              <p></p>
              <div className={style.winners__sum}>
                <p>334 883 756₽</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={style.winner__item}>
              <div className={style.winners__image}>
                <img src={winner3} alt="winner 1" />
              </div>
              <p></p>
              <div className={style.winners__sum}>
                <p>512 261 694 ₽</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={style.winner__item}>
              <div className={style.winners__image}>
                <img src={winner4} alt="winner 1" />
              </div>
              <p></p>
              <div className={style.winners__sum}>
                <p>6 814 416₽</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={style.winner__item}>
              <div className={style.winners__image}>
                <img src={winner5} alt="winner 1" />
              </div>
              <p></p>
              <div className={style.winners__sum}>
                <p>3 333 334₽</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={style.winner__item}>
              <div className={style.winners__image}>
                <img src={winner6} alt="winner 1" />
              </div>
              <p></p>
              <div className={style.winners__sum}>
                <p>2 454 732₽</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={style.winner__item}>
              <div className={style.winners__image}>
                <img src={winner7} alt="winner 1" />
              </div>
              <p></p>
              <div className={style.winners__sum}>
                <p>312 873 513₽</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={style.winner__item}>
              <div className={style.winners__image}>
                <img src={winner8} alt="winner 1" />
              </div>
              <p></p>
              <div className={style.winners__sum}>
                <p>733 333₽</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={style.winner__item}>
              <div className={style.winners__image}>
                <img src={winner9} alt="winner 1" />
              </div>
              <p></p>
              <div className={style.winners__sum}>
                <p>45 231 264₽</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={style.winner__item}>
              <div className={style.winners__image}>
                <img src={winner10} alt="winner 1" />
              </div>
              <p></p>
              <div className={style.winners__sum}>
                <p>517 391₽</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={style.winner__item}>
              <div className={style.winners__image}>
                <img src={winner11} alt="winner 1" />
              </div>
              <p></p>
              <div className={style.winners__sum}>
                <p>56 388 464₽</p>
              </div>
            </SwiperSlide>

          </Swiper>

          {/* {window.innerWidth <= 1190 && ( */}
            <div className={style.winners__nav}>
              <button onClick={() => swiperRef.current?.slidePrev()}>
                <img src={arrowLeft} alt="left" />
              </button>
              {/* <div className="custom-pagination-4"></div> */}
              <button onClick={() => swiperRef.current?.slideNext()}>
                <img src={arrowRight} alt="right" />
              </button>
            </div>
          {/* )} */}
        </div>
      </div>
    </section>
  );
};

export default Winners;
