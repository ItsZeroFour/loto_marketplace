import React, { useRef } from "react";
import style from "./style.module.scss";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import newsImg1 from "../../assets/images/news/1.webp";
import newsImg2 from "../../assets/images/news/2.jpg";
import newsImg3 from "../../assets/images/news/3.webp";
import { Link } from "react-router-dom";

import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

const News = () => {
  const swiperRef = useRef(null);

  return (
    <section className={style.news}>
      <div className="container">
        <div className={style.news__wrapper}>
          <h2>Главные новости</h2>

          <div className={style.best__loto__slide_1}>
            <Swiper
              modules={[Pagination]}
              spaceBetween={30} // Отступ между слайдами
              slidesPerView={2} // Изначально показываем два слайда
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper; // Сохраняем экземпляр Swiper в реф
              }}
              breakpoints={{
                // Указываем, что на ширине 600 и меньше будет 1 слайд
                1200: {
                  slidesPerView: 2,
                },

                220: {
                  slidesPerView: 1,
                },
              }}
              loop={true}
              grabCursor={true}
              pagination={{
                el: ".custom-pagination-3",
                type: "bullets",
                clickable: true,
              }}
            >
              <SwiperSlide>
                <Link to="https://ura.news/news/1052843152">
                  <div className={style.best__loto__slide}>
                    <div className={style.best__loto__left}>
                      <img src={newsImg1} alt="news 1" />
                    </div>
                    <div className={style.best__loto__right}>
                      <h3>
                        Пятеро жителей Тюменской области стали лотерейными
                        миллионерами
                      </h3>
                      <p>
                        С начала года пятеро жителей Тюменской области стали
                        миллионерами, выиграв в лотерею.
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link to="">
                  <div className={style.best__loto__slide}>
                    <div className={style.best__loto__left}>
                      <img src={newsImg2} alt="news 2" />
                    </div>
                    <div className={style.best__loto__right}>
                      <h3>
                        Тюменские лотерейные миллиардеры продали квартиру и
                        уехали из страны
                      </h3>
                      <p>
                        Семья Семеновых выиграла миллиард рублей в новогодней
                        лотерее. Они делились планами на выигрыш, но о своем
                        срочном переезде решили умолчать.
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <div className={style.best__loto__slide}>
                  <div className={style.best__loto__left}>
                    <img src={newsImg3} alt="news 3" />
                  </div>
                  <div className={style.best__loto__right}>
                    <h3>
                      Выигравший миллиард в лотерею россиянин пока не явился за
                      призом
                    </h3>
                    <p>
                      Житель Тюмени, выигравший миллиард рублей в новогоднем
                      тираже «Русского лото», пока еще не оформил свой выигрыш,
                      сообщила пресс-служба компании «Столото»
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {window.innerWidth <= 1190 && (
              <div className={style.winners__nav}>
                <button onClick={() => swiperRef.current?.slidePrev()}>
                  <img src={arrowLeft} alt="left" />
                </button>
                <div className="custom-pagination-3"></div>
                <button onClick={() => swiperRef.current?.slideNext()}>
                  <img src={arrowRight} alt="right" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
