import React, { useRef, useState } from "react";
import style from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import fonbet_logo from "../../assets/images/fonbet.png";
import soon from "../../assets/images/soon.png";
import _100loto from "../../assets/images/100loto.png";
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import info from "../../assets/icons/info.svg";

const BestLoto = ({
  myRef,
  item1_list1_text,
  item1_list1_title,
  item1_list2_text,
  item1_list2_title,
  item1_list3_text,
  item1_list3_title,
  item1_list4_text,
  item1_list4_title,

  item2_list1_text,
  item2_list1_title,
  item2_list2_text,
  item2_list2_title,
  item2_list3_text,
  item2_list3_title,
  item2_list4_text,
  item2_list4_title,

  item3_list1_text,
  item3_list1_title,
  item3_list2_text,
  item3_list2_title,
  item3_list3_text,
  item3_list3_title,
  item3_list4_text,
  item3_list4_title,

  item4_list1_text,
  item4_list1_title,
  item4_list2_text,
  item4_list2_title,
  item4_list3_text,
  item4_list3_title,
  item4_list4_text,
  item4_list4_title,

  item5_list1_text,
  item5_list1_title,
  item5_list2_text,
  item5_list2_title,
  item5_list3_text,
  item5_list3_title,
  item5_list4_text,
  item5_list4_title,

  item6_list1_text,
  item6_list1_title,
  item6_list2_text,
  item6_list2_title,
  item6_list3_text,
  item6_list3_title,
  item6_list4_text,
  item6_list4_title,

  item1_logo,
  item2_logo,
  item3_logo,
  item4_logo,
  item5_logo,
  item6_logo,

  item1_title,
  item2_title,
  item3_title,
  item4_title,
  item5_title,
  item6_title,

  externalId,
  utmMedium,
  utmCampaign,
  gbid,
  utmCreative,
  utmTerm,
  utmSource,

  item1_button_link,
  item2_button_link,
  item3_button_link,
  item4_button_link,
  item5_button_link,
  item6_button_link,

  utmContent
}) => {
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
            {/* <Swiper
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
            > */}
              {/* <SwiperSlide> */}
                <div className={style.best__loto__slide}>
                  <div className={style.best__loto__top}>
                    <div className={style.best__loto__logo}>
                      <img
                        src={`${process.env.REACT_APP_SERVER_URL}${item1_logo}`}
                        alt="100loto"
                      />
                      <p>{item1_title}</p>
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
                      className="loto_buy_btn"
                      onMouseEnter={() => setOpenInfoMenuIndex(1)}
                      onMouseLeave={() => setOpenInfoMenuIndex(null)}
                      onClick={() => setOpenInfoMenuIndex(1)}
                    >
                      <img src={info} alt="info" />
                    </button>
                  </div>

                  <ul className={style.best__loto__stats}>
                    <li>
                      <p>{item1_list1_title}</p>
                      <p>{item1_list1_text}</p>
                    </li>

                    <li>
                      <p>{item1_list2_title}</p>
                      <p>{item1_list2_text}</p>
                    </li>

                    <li>
                      <p>{item1_list3_title}</p>
                      <p>{item1_list3_text}</p>
                    </li>

                    <li>
                      <p>{item1_list4_title}</p>
                      <p>{item1_list4_text}</p>
                    </li>
                  </ul>

                  <Link
                    onClick={async () => {
                      if (window.ym) {
                        window.ym(96184136, "reachGoal", "loto_btn_click");
                      }
                    }}
                    to={`${item1_button_link}?external_id=${externalId}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&gbid=${gbid}&utm_creative=${utmCreative}&utm_term=${utmTerm}&utm_source=${utmSource}&utm_content=${utmContent}`}
                  >
                    Купить билет
                  </Link>

                  <p
                    style={{
                      fontSize: 10,
                      textAlign: "center",
                      marginTop: "20px",
                    }}
                  >
                    Организаторами всероссийских государственных лотерей
                    выступают — Министерство финансов РФ и Министерство спорта
                    РФ.
                  </p>
                </div>
              {/* </SwiperSlide> */}

              {/* <SwiperSlide> */}
                <div className={style.best__loto__slide}>
                  <div className={style.best__loto__top}>
                    <div className={style.best__loto__logo}>
                      <img
                        src={`${process.env.REACT_APP_SERVER_URL}${item2_logo}`}
                        alt="fonbet"
                      />
                      <p>{item2_title}</p>
                    </div>

                    {openInfoMenuIndex === 4 && (
                      <div
                        className={style.best__loto__slide__info}
                        onMouseEnter={() => setOpenInfoMenuIndex(4)}
                        onMouseLeave={() => setOpenInfoMenuIndex(null)}
                      >
                        <Link
                          target="_blank"
                          to="https://nloto.ru/docs/%D0%9F%D1%80%D0%B8%D0%BA%D0%B0%D0%B7_%D0%9C%D0%B8%D0%BD%D1%84%D0%B8%D0%BD%D0%B0_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8_%D0%BE%D1%82_17.08.2022_%E2%84%96126%D0%BD.pdf"
                          onClick={() => setOpenInfoMenuIndex(null)}
                        >
                          Документы
                        </Link>
                      </div>
                    )}

                    <button
                      className="fonbet_buy_btn"
                      onMouseEnter={() => setOpenInfoMenuIndex(4)}
                      onMouseLeave={() => setOpenInfoMenuIndex(null)}
                      onClick={() => setOpenInfoMenuIndex(4)}
                    >
                      <img src={info} alt="info" />
                    </button>
                  </div>

                  <ul className={style.best__loto__stats}>
                    <li>
                      <p>{item2_list1_title}</p>
                      <p>{item2_list1_text}</p>
                    </li>

                    <li>
                      <p>{item2_list2_title}</p>
                      <p>{item2_list2_text}</p>
                    </li>

                    <li>
                      <p>{item2_list3_title}</p>
                      <p>{item2_list3_text}</p>
                    </li>

                    <li>
                      <p>{item2_list4_title}</p>
                      <p>{item2_list4_text}</p>
                    </li>
                  </ul>

                  <Link
                    onClick={async () => {
                      if (window.ym) {
                        window.ym(96184136, "reachGoal", "fonbet_btn_click");
                      }
                    }}
                    to={`${item2_button_link}?external_id=${externalId}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&gbid=${gbid}&utm_creative=${utmCreative}&utm_term=${utmTerm}&utm_source=${utmSource}&utm_content=${utmContent}`}
                  >
                    Купить билет
                  </Link>

                  <p
                    style={{
                      fontSize: 10,
                      textAlign: "center",
                      marginTop: "20px",
                    }}
                  >
                    Организаторами всероссийских государственных лотерей
                    выступают — Министерство финансов РФ и Министерство спорта
                    РФ.
                  </p>
                </div>
              {/* </SwiperSlide> */}

              {/* <SwiperSlide> */}
                <div className={style.best__loto__slide}>
                  <div className={style.best__loto__top}>
                    <div className={style.best__loto__logo}>
                      <img
                        src={`${process.env.REACT_APP_SERVER_URL}${item3_logo}`}
                        alt="fonbet"
                      />
                      <p>{item3_title}</p>
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
                      onClick={() => setOpenInfoMenuIndex(3)}
                    >
                      <img src={info} alt="info" />
                    </button>
                  </div>

                  <ul className={style.best__loto__stats}>
                    <li>
                      <p>{item3_list1_title}</p>
                      <p>{item3_list1_text}</p>
                    </li>

                    <li>
                      <p>{item3_list2_title}</p>
                      <p>{item3_list2_text}</p>
                    </li>

                    <li>
                      <p>{item3_list3_title}</p>
                      <p>{item3_list3_text}</p>
                    </li>

                    <li>
                      <p>{item3_list4_title}</p>
                      <p>{item3_list4_text}</p>
                    </li>
                  </ul>

                  <Link to={`${item3_button_link}?external_id=${externalId}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&gbid=${gbid}&utm_creative=${utmCreative}&utm_term=${utmTerm}&utm_source=${utmSource}`}>Купить билет</Link>
                
                  <p
                    style={{
                      fontSize: 10,
                      textAlign: "center",
                      marginTop: "20px",
                    }}
                  >
                    Организаторами всероссийских государственных лотерей
                    выступают — Министерство финансов РФ и Министерство спорта
                    РФ.
                  </p>
                </div>
              {/* </SwiperSlide> */}
            {/* </Swiper> */}

            <div className="custom-pagination"></div>
          </div>

          {/* <div className={style.best__loto__slide_2}>
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={2}
              breakpoints={{
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
                    <div className={style.best__loto__logo}>
                      <img
                        src={`${process.env.REACT_APP_SERVER_URL}${item4_logo}`}
                        alt="fonbet"
                      />
                      <p>{item4_title}</p>
                    </div>

                    {openInfoMenuIndex === 4 && (
                      <div
                        className={style.best__loto__slide__info}
                        onMouseEnter={() => setOpenInfoMenuIndex(4)}
                        onMouseLeave={() => setOpenInfoMenuIndex(null)}
                      >
                        <Link
                          target="_blank"
                          to="https://nloto.ru/docs/%D0%9F%D1%80%D0%B8%D0%BA%D0%B0%D0%B7_%D0%9C%D0%B8%D0%BD%D1%84%D0%B8%D0%BD%D0%B0_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8_%D0%BE%D1%82_17.08.2022_%E2%84%96126%D0%BD.pdf"
                          onClick={() => setOpenInfoMenuIndex(null)}
                        >
                          Документы
                        </Link>
                      </div>
                    )}

                    <button
                      className="fonbet_buy_btn"
                      onMouseEnter={() => setOpenInfoMenuIndex(4)}
                      onMouseLeave={() => setOpenInfoMenuIndex(null)}
                      onClick={() => setOpenInfoMenuIndex(4)}
                    >
                      <img src={info} alt="info" />
                    </button>
                  </div>

                  <ul className={style.best__loto__stats}>
                    <li>
                      <p>{item4_list1_title}</p>
                      <p>{item4_list1_text}</p>
                    </li>

                    <li>
                      <p>{item4_list2_title}</p>
                      <p>{item4_list2_text}</p>
                    </li>

                    <li>
                      <p>{item4_list3_title}</p>
                      <p>{item4_list3_text}</p>
                    </li>

                    <li>
                      <p>{item4_list4_title}</p>
                      <p>{item4_list4_text}</p>
                    </li>
                  </ul>

                  <Link
                    onClick={async () => {
                      if (window.ym) {
                        window.ym(96184136, "reachGoal", "fonbet_btn_click");
                      }
                    }}
                    to={`${item4_button_link}?external_id=${externalId}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&gbid=${gbid}&utm_creative=${utmCreative}&utm_term=${utmTerm}&utm_source=${utmSource}&utm_content=${utmContent}`}
                  >
                    Купить билет
                  </Link>

                  <p
                    style={{
                      fontSize: 10,
                      textAlign: "center",
                      marginTop: "20px",
                    }}
                  >
                    Организаторами всероссийских государственных лотерей
                    выступают — Министерство финансов РФ и Министерство спорта
                    РФ.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={style.best__loto__slide}>
                  <div className={style.best__loto__top}>
                    <div className={style.best__loto__logo}>
                      <img
                        src={`${process.env.REACT_APP_SERVER_URL}${item5_logo}`}
                        alt="100loto"
                      />
                      <p>{item5_title}</p>
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
                      className="loto_buy_btn"
                      onMouseEnter={() => setOpenInfoMenuIndex(1)}
                      onMouseLeave={() => setOpenInfoMenuIndex(null)}
                      onClick={() => setOpenInfoMenuIndex(1)}
                    >
                      <img src={info} alt="info" />
                    </button>
                  </div>

                  <ul className={style.best__loto__stats}>
                    <li>
                      <p>{item5_list1_title}</p>
                      <p>{item5_list1_text}</p>
                    </li>

                    <li>
                      <p>{item5_list2_title}</p>
                      <p>{item5_list2_text}</p>
                    </li>

                    <li>
                      <p>{item5_list3_title}</p>
                      <p>{item5_list3_text}</p>
                    </li>

                    <li>
                      <p>{item5_list4_title}</p>
                      <p>{item5_list4_text}</p>
                    </li>
                  </ul>

                  <Link
                    onClick={async () => {
                      if (window.ym) {
                        window.ym(96184136, "reachGoal", "loto_btn_click");
                      }
                    }}
                    to={`${item5_button_link}?external_id=${externalId}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&gbid=${gbid}&utm_creative=${utmCreative}&utm_term=${utmTerm}&utm_source=${utmSource}&utm_content=${utmContent}`}
                  >
                    Купить билет
                  </Link>

                  <p
                    style={{
                      fontSize: 10,
                      textAlign: "center",
                      marginTop: "20px",
                    }}
                  >
                    Организаторами всероссийских государственных лотерей
                    выступают — Министерство финансов РФ и Министерство спорта
                    РФ.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={style.best__loto__slide}>
                  <div className={style.best__loto__top}>
                    <div className={style.best__loto__logo}>
                      <img
                        src={`${process.env.REACT_APP_SERVER_URL}${item6_logo}`}
                        alt="fonbet"
                      />
                      <p>{item6_title}</p>
                    </div>

                    {openInfoMenuIndex === 6 && (
                      <div
                        className={style.best__loto__slide__info}
                        onMouseEnter={() => setOpenInfoMenuIndex(6)}
                        onMouseLeave={() => setOpenInfoMenuIndex(null)}
                      >
                        <Link
                          target="_blank"
                          to="https://nloto.ru/docs/%D0%9F%D1%80%D0%B8%D0%BA%D0%B0%D0%B7_%D0%9C%D0%B8%D0%BD%D1%84%D0%B8%D0%BD%D0%B0_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8_%D0%BE%D1%82_17.08.2022_%E2%84%96126%D0%BD.pdf"
                          onClick={() => setOpenInfoMenuIndex(null)}
                        >
                          Документы
                        </Link>
                      </div>
                    )}
                    
                    <button
                      onMouseEnter={() => setOpenInfoMenuIndex(6)}
                      onMouseLeave={() => setOpenInfoMenuIndex(null)}
                      onClick={() => setOpenInfoMenuIndex(6)}
                    >
                      <img src={info} alt="info" />
                    </button>
                  </div>

                  <ul className={style.best__loto__stats}>
                    <li>
                      <p>{item6_list1_title}</p>
                      <p>{item6_list1_text}</p>
                    </li>

                    <li>
                      <p>{item6_list2_title}</p>
                      <p>{item6_list2_text}</p>
                    </li>

                    <li>
                      <p>{item6_list3_title}</p>
                      <p>{item6_list3_text}</p>
                    </li>

                    <li>
                      <p>{item6_list4_title}</p>
                      <p>{item6_list4_text}</p>
                    </li>
                  </ul>

                  <Link to={`${item6_button_link}?external_id=${externalId}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&gbid=${gbid}&utm_creative=${utmCreative}&utm_term=${utmTerm}&utm_source=${utmSource}`}>Купить билет</Link>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="custom-pagination-2"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default BestLoto;
