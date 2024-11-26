import React from "react";
import style from "./style.module.scss";
import woman from "../../assets/images/woman.png";
import { Link } from "react-router-dom";

const Head = ({ scrollToElement }) => {
  return (
    <section className={style.head}>
      <div className="container">
        <div className={style.head__wrapper}>
          <aside className={style.head__left}>
            <div className={style.head__main}>
              <h1>
                Ваш шанс на выигрыш в один клик! <br /> Лотерейные билеты онлайн
              </h1>

              <div className={style.head__image_con}>
                <div className={`${style.head__image} ${style.head__image_2}`}>
                  <img src={woman} alt="woman" />
                </div>
              </div>

              <ul>
                <li>
                  <p>Быстрая покупка</p>
                </li>

                <li>
                  <p>Широкий выбор</p>
                </li>

                <li>
                  <p>Безопасность</p>
                </li>
              </ul>

              <Link
                onClick={async () => {
                  if (window.ym) {
                    await window.ym(
                      96184136,
                      "reachGoal",
                      "main_red_btn_click"
                    );
                  }
                  scrollToElement();
                }}
                to=""
                className="main_red_btn"
              >
                Купить билеты
              </Link>
            </div>

            <div className={`${style.head__image} ${style.head__image_1}`}>
              <img src={woman} alt="woman" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Head;
