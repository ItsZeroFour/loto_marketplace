import React, { useRef, useState } from "react";
import style from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import fonbet_logo from "../../assets/images/fonbet.png";
import _100loto from "../../assets/images/100loto.png";
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import info from "../../assets/icons/info.svg";

const BestLoto = ({ myRef }) => {
  const [itemText, setItemText] = useState("");
  const [openInfoMenuIndex, setOpenInfoMenuIndex] = useState(null);

  return (
    <section className={style.best_loto} id="loto" ref={myRef}>
      {itemText !== "" && (
        <div className={style.best_loto__modal}>
          <div className={style.best_loto__modal__container}>
            <div
              className={style.best_loto__modal_close}
              onClick={() => setItemText("")}
            ></div>
            <p>{itemText}</p>
          </div>
        </div>
      )}
      <div className="container">
        <div className={style.best__loto__wrapper}>
          <h2>Лучшие Лотереи в Одном Месте</h2>

          <div className={style.best__loto__slide_1}>
            <Swiper
              modules={[Pagination]}
              spaceBetween={30} // Отступ между слайдами
              slidesPerView={2} // Изначально показываем два слайда
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
                el: ".custom-pagination",
                type: "bullets",
                clickable: true,
              }}
            >
              <SwiperSlide>
                <div className={style.best__loto__slide}>
                  <div className={style.best__loto__top}>
                    <div>
                      <img src={_100loto} alt="100loto" />
                      <p>Столото</p>
                    </div>

                    {openInfoMenuIndex === 1 && (
                      <div
                        className={style.best__loto__slide__info}
                        onMouseEnter={() => setOpenInfoMenuIndex(1)}
                        onMouseLeave={() => setOpenInfoMenuIndex(null)}
                      >
                        <Link
                          target="_blank"
                          to="https://static.stoloto.ru/files/documents/polozhenie_ob_amk_bez_prikaza.pdf"
                          onClick={() => setOpenInfoMenuIndex(null)}
                        >
                          Документы
                        </Link>
                      </div>
                    )}

                    <button
                      onMouseEnter={() => setOpenInfoMenuIndex(1)}
                      onMouseLeave={() => setOpenInfoMenuIndex(null)}
                    >
                      <img src={info} alt="info" />
                    </button>
                  </div>

                  <ul className={style.best__loto__stats}>
                    <li>
                      <p>Призовой фонд:</p>
                      <p>700 000 - 4 000 000₽</p>
                    </li>

                    <li>
                      <p>Стоимость билета:</p>
                      <p>250₽</p>
                    </li>

                    <li>
                      <p>Шанс на выигрыш:</p>
                      <p>10%</p>
                    </li>

                    <li>
                      <p>Популярность:</p>
                      <p>Популярна</p>
                    </li>

                    <li>
                      <p>Тип лотереи:</p>
                      <p>Розыгрыш с билетом</p>
                    </li>
                  </ul>

                  <Link to="#">Купить билет</Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={style.best__loto__slide}>
                  <div className={style.best__loto__top}>
                    <div>
                      <img src={_100loto} alt="100loto" />
                      <p>Столото</p>
                    </div>

                    {openInfoMenuIndex === 2 && (
                      <div
                        className={style.best__loto__slide__info}
                        onMouseEnter={() => setOpenInfoMenuIndex(2)}
                        onMouseLeave={() => setOpenInfoMenuIndex(null)}
                      >
                        <Link
                          target="_blank"
                          to="https://static.stoloto.ru/files/documents/polozhenie_ob_amk_bez_prikaza.pdf"
                          onClick={() => setOpenInfoMenuIndex(null)}
                        >
                          Документы
                        </Link>
                      </div>
                    )}

                    <button
                      onMouseEnter={() => setOpenInfoMenuIndex(2)}
                      onMouseLeave={() => setOpenInfoMenuIndex(null)}
                    >
                      <img src={info} alt="info" />
                    </button>
                  </div>

                  <ul className={style.best__loto__stats}>
                    <li>
                      <p>Призовой фонд:</p>
                      <p>700 000 - 4 000 000₽</p>
                    </li>

                    <li>
                      <p>Стоимость билета:</p>
                      <p>250₽</p>
                    </li>

                    <li>
                      <p>Шанс на выигрыш:</p>
                      <p>10%</p>
                    </li>

                    <li>
                      <p>Популярность:</p>
                      <p>Популярна</p>
                    </li>

                    <li>
                      <p>Тип лотереи:</p>
                      <p>Розыгрыш с билетом</p>
                    </li>
                  </ul>

                  <Link to="#">Купить билет</Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={style.best__loto__slide}>
                  <div className={style.best__loto__top}>
                    <div>
                      <img src={_100loto} alt="100loto" />
                      <p>Столото</p>
                    </div>

                    {openInfoMenuIndex === 3 && (
                      <div
                        className={style.best__loto__slide__info}
                        onMouseEnter={() => setOpenInfoMenuIndex(3)}
                        onMouseLeave={() => setOpenInfoMenuIndex(null)}
                      >
                        <Link
                          target="_blank"
                          to="https://static.stoloto.ru/files/documents/polozhenie_ob_amk_bez_prikaza.pdf"
                          onClick={() => setOpenInfoMenuIndex(null)}
                        >
                          Документы
                        </Link>
                      </div>
                    )}

                    <button
                      onMouseEnter={() => setOpenInfoMenuIndex(3)}
                      onMouseLeave={() => setOpenInfoMenuIndex(null)}
                    >
                      <img src={info} alt="info" />
                    </button>
                  </div>

                  <ul className={style.best__loto__stats}>
                    <li>
                      <p>Призовой фонд:</p>
                      <p>700 000 - 4 000 000₽</p>
                    </li>

                    <li>
                      <p>Стоимость билета:</p>
                      <p>250₽</p>
                    </li>

                    <li>
                      <p>Шанс на выигрыш:</p>
                      <p>10%</p>
                    </li>

                    <li>
                      <p>Популярность:</p>
                      <p>Популярна</p>
                    </li>

                    <li>
                      <p>Тип лотереи:</p>
                      <p>Розыгрыш с билетом</p>
                    </li>
                  </ul>

                  <Link to="#">Купить билет</Link>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="custom-pagination"></div>
          </div>

          <div className={style.best__loto__slide_2}>
            <Swiper
              modules={[Pagination]}
              spaceBetween={30} // Отступ между слайдами
              slidesPerView={2} // Изначально показываем два слайда
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
                el: ".custom-pagination-2",
                type: "bullets",
                clickable: true,
              }}
            >
              <SwiperSlide>
                <div className={style.best__loto__slide}>
                  <div className={style.best__loto__top}>
                    <div>
                      <img src={fonbet_logo} alt="fonbet" />
                      <p>Fonbet</p>
                    </div>

                    {openInfoMenuIndex === 4 && (
                      <div
                        className={style.best__loto__slide__info}
                        onMouseEnter={() => setOpenInfoMenuIndex(4)}
                        onMouseLeave={() => setOpenInfoMenuIndex(null)}
                      >
                        <Link
                          target="_blank"
                          to="https://static.stoloto.ru/files/documents/polozhenie_ob_amk_bez_prikaza.pdf"
                          onClick={() => setOpenInfoMenuIndex(null)}
                        >
                          Документы
                        </Link>
                      </div>
                    )}

                    <button
                      onMouseEnter={() => setOpenInfoMenuIndex(4)}
                      onMouseLeave={() => setOpenInfoMenuIndex(null)}
                    >
                      <img src={info} alt="info" />
                    </button>
                  </div>

                  <ul className={style.best__loto__stats}>
                    <li>
                      <p>Призовой фонд:</p>
                      <p>700 000 - 4 000 000₽</p>
                    </li>

                    <li>
                      <p>Стоимость билета:</p>
                      <p>250₽</p>
                    </li>

                    <li>
                      <p>Шанс на выигрыш:</p>
                      <p>10%</p>
                    </li>

                    <li>
                      <p>Популярность:</p>
                      <p>Популярна</p>
                    </li>

                    <li>
                      <p>Тип лотереи:</p>
                      <p>Розыгрыш с билетом</p>
                    </li>
                  </ul>

                  <Link to="#">Купить билет</Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={style.best__loto__slide}>
                  <div className={style.best__loto__top}>
                    <div>
                      <img src={fonbet_logo} alt="fonbet" />
                      <p>Fonbet</p>
                    </div>

                    {openInfoMenuIndex === 5 && (
                      <div
                        className={style.best__loto__slide__info}
                        onMouseEnter={() => setOpenInfoMenuIndex(5)}
                        onMouseLeave={() => setOpenInfoMenuIndex(null)}
                      >
                        <Link
                          target="_blank"
                          to="https://static.stoloto.ru/files/documents/polozhenie_ob_amk_bez_prikaza.pdf"
                          onClick={() => setOpenInfoMenuIndex(null)}
                        >
                          Документы
                        </Link>
                      </div>
                    )}

                    <button
                      onMouseEnter={() => setOpenInfoMenuIndex(5)}
                      onMouseLeave={() => setOpenInfoMenuIndex(null)}
                    >
                      <img src={info} alt="info" />
                    </button>
                  </div>

                  <ul className={style.best__loto__stats}>
                    <li>
                      <p>Призовой фонд:</p>
                      <p>700 000 - 4 000 000₽</p>
                    </li>

                    <li>
                      <p>Стоимость билета:</p>
                      <p>250₽</p>
                    </li>

                    <li>
                      <p>Шанс на выигрыш:</p>
                      <p>10%</p>
                    </li>

                    <li>
                      <p>Популярность:</p>
                      <p>Популярна</p>
                    </li>

                    <li>
                      <p>Тип лотереи:</p>
                      <p>Розыгрыш с билетом</p>
                    </li>
                  </ul>

                  <Link to="#">Купить билет</Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={style.best__loto__slide}>
                  <div className={style.best__loto__top}>
                    <div>
                      <img src={fonbet_logo} alt="fonbet" />
                      <p>Fonbet</p>
                    </div>

                    {openInfoMenuIndex === 6 && (
                      <div
                        className={style.best__loto__slide__info}
                        onMouseEnter={() => setOpenInfoMenuIndex(6)}
                        onMouseLeave={() => setOpenInfoMenuIndex(null)}
                      >
                        <Link
                          target="_blank"
                          to="https://static.stoloto.ru/files/documents/polozhenie_ob_amk_bez_prikaza.pdf"
                          onClick={() => setOpenInfoMenuIndex(null)}
                        >
                          Документы
                        </Link>
                      </div>
                    )}

                    <button
                      onMouseEnter={() => setOpenInfoMenuIndex(6)}
                      onMouseLeave={() => setOpenInfoMenuIndex(null)}
                    >
                      <img src={info} alt="info" />
                    </button>
                  </div>

                  <ul className={style.best__loto__stats}>
                    <li>
                      <p>Призовой фонд:</p>
                      <p>700 000 - 4 000 000₽</p>
                    </li>

                    <li>
                      <p>Стоимость билета:</p>
                      <p>250₽</p>
                    </li>

                    <li>
                      <p>Шанс на выигрыш:</p>
                      <p>10%</p>
                    </li>

                    <li>
                      <p>Популярность:</p>
                      <p>Популярна</p>
                    </li>

                    <li>
                      <p>Тип лотереи:</p>
                      <p>Розыгрыш с билетом</p>
                    </li>
                  </ul>

                  <Link to="#">Купить билет</Link>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="custom-pagination-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestLoto;
