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

                    <button
                      onClick={() =>
                        setItemText(
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nobis nostrum voluptatibus fuga, facere vitae asperiores quisquam doloribus provident natus odit, veniam nulla fugiat. Dignissimos sunt sed repellat blanditiis, inventore similique sint ut, architecto officiis tempore labore? Repudiandae error voluptates cumque ipsa tempora veniam beatae, praesentium ipsam, ex nemo esse dolores vel eaque obcaecati quidem magnam modi deserunt necessitatibus inventore explicabo vitae omnis doloremque rem. Dolores, dolore recusandae, dolorem fuga commodi facere explicabo laboriosam non quasi illum dolorum id praesentium mollitia ipsa sequi vero tempora delectus assumenda laborum quis laudantium temporibus! Excepturi dolorem, odio deleniti ea expedita necessitatibus rem!"
                        )
                      }
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

                    <button
                      onClick={() =>
                        setItemText(
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nobis nostrum voluptatibus fuga, facere vitae asperiores quisquam doloribus provident natus odit, veniam nulla fugiat. Dignissimos sunt sed repellat blanditiis, inventore similique sint ut, architecto officiis tempore labore? Repudiandae error voluptates cumque ipsa tempora veniam beatae, praesentium ipsam, ex nemo esse dolores vel eaque obcaecati quidem magnam modi deserunt necessitatibus inventore explicabo vitae omnis doloremque rem. Dolores, dolore recusandae, dolorem fuga commodi facere explicabo laboriosam non quasi illum dolorum id praesentium mollitia ipsa sequi vero tempora delectus assumenda laborum quis laudantium temporibus! Excepturi dolorem, odio deleniti ea expedita necessitatibus rem!"
                        )
                      }
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

                    <button
                      onClick={() =>
                        setItemText(
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nobis nostrum voluptatibus fuga, facere vitae asperiores quisquam doloribus provident natus odit, veniam nulla fugiat. Dignissimos sunt sed repellat blanditiis, inventore similique sint ut, architecto officiis tempore labore? Repudiandae error voluptates cumque ipsa tempora veniam beatae, praesentium ipsam, ex nemo esse dolores vel eaque obcaecati quidem magnam modi deserunt necessitatibus inventore explicabo vitae omnis doloremque rem. Dolores, dolore recusandae, dolorem fuga commodi facere explicabo laboriosam non quasi illum dolorum id praesentium mollitia ipsa sequi vero tempora delectus assumenda laborum quis laudantium temporibus! Excepturi dolorem, odio deleniti ea expedita necessitatibus rem!"
                        )
                      }
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

                    <button
                      onClick={() =>
                        setItemText(
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nobis nostrum voluptatibus fuga, facere vitae asperiores quisquam doloribus provident natus odit, veniam nulla fugiat. Dignissimos sunt sed repellat blanditiis, inventore similique sint ut, architecto officiis tempore labore? Repudiandae error voluptates cumque ipsa tempora veniam beatae, praesentium ipsam, ex nemo esse dolores vel eaque obcaecati quidem magnam modi deserunt necessitatibus inventore explicabo vitae omnis doloremque rem. Dolores, dolore recusandae, dolorem fuga commodi facere explicabo laboriosam non quasi illum dolorum id praesentium mollitia ipsa sequi vero tempora delectus assumenda laborum quis laudantium temporibus! Excepturi dolorem, odio deleniti ea expedita necessitatibus rem!"
                        )
                      }
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

                    <button
                      onClick={() =>
                        setItemText(
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nobis nostrum voluptatibus fuga, facere vitae asperiores quisquam doloribus provident natus odit, veniam nulla fugiat. Dignissimos sunt sed repellat blanditiis, inventore similique sint ut, architecto officiis tempore labore? Repudiandae error voluptates cumque ipsa tempora veniam beatae, praesentium ipsam, ex nemo esse dolores vel eaque obcaecati quidem magnam modi deserunt necessitatibus inventore explicabo vitae omnis doloremque rem. Dolores, dolore recusandae, dolorem fuga commodi facere explicabo laboriosam non quasi illum dolorum id praesentium mollitia ipsa sequi vero tempora delectus assumenda laborum quis laudantium temporibus! Excepturi dolorem, odio deleniti ea expedita necessitatibus rem!"
                        )
                      }
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

                    <button
                      onClick={() =>
                        setItemText(
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nobis nostrum voluptatibus fuga, facere vitae asperiores quisquam doloribus provident natus odit, veniam nulla fugiat. Dignissimos sunt sed repellat blanditiis, inventore similique sint ut, architecto officiis tempore labore? Repudiandae error voluptates cumque ipsa tempora veniam beatae, praesentium ipsam, ex nemo esse dolores vel eaque obcaecati quidem magnam modi deserunt necessitatibus inventore explicabo vitae omnis doloremque rem. Dolores, dolore recusandae, dolorem fuga commodi facere explicabo laboriosam non quasi illum dolorum id praesentium mollitia ipsa sequi vero tempora delectus assumenda laborum quis laudantium temporibus! Excepturi dolorem, odio deleniti ea expedita necessitatibus rem!"
                        )
                      }
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

                    <button
                      onClick={() =>
                        setItemText(
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nobis nostrum voluptatibus fuga, facere vitae asperiores quisquam doloribus provident natus odit, veniam nulla fugiat. Dignissimos sunt sed repellat blanditiis, inventore similique sint ut, architecto officiis tempore labore? Repudiandae error voluptates cumque ipsa tempora veniam beatae, praesentium ipsam, ex nemo esse dolores vel eaque obcaecati quidem magnam modi deserunt necessitatibus inventore explicabo vitae omnis doloremque rem. Dolores, dolore recusandae, dolorem fuga commodi facere explicabo laboriosam non quasi illum dolorum id praesentium mollitia ipsa sequi vero tempora delectus assumenda laborum quis laudantium temporibus! Excepturi dolorem, odio deleniti ea expedita necessitatibus rem!"
                        )
                      }
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

                    <button
                      onClick={() =>
                        setItemText(
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nobis nostrum voluptatibus fuga, facere vitae asperiores quisquam doloribus provident natus odit, veniam nulla fugiat. Dignissimos sunt sed repellat blanditiis, inventore similique sint ut, architecto officiis tempore labore? Repudiandae error voluptates cumque ipsa tempora veniam beatae, praesentium ipsam, ex nemo esse dolores vel eaque obcaecati quidem magnam modi deserunt necessitatibus inventore explicabo vitae omnis doloremque rem. Dolores, dolore recusandae, dolorem fuga commodi facere explicabo laboriosam non quasi illum dolorum id praesentium mollitia ipsa sequi vero tempora delectus assumenda laborum quis laudantium temporibus! Excepturi dolorem, odio deleniti ea expedita necessitatibus rem!"
                        )
                      }
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
