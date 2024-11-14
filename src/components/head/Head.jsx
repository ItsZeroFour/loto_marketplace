import React from "react";
import style from "./style.module.scss";
import woman from "../../assets/images/woman.png";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <section className={style.head}>
      <div className="container">
        <div className={style.head__wrapper}>
          <aside className={style.head__left}>
            <h1>Ваш шанс на выигрыш в один клик! <br /> Лотерейные билеты онлайн</h1>
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

            <Link to="#">Купить билеты</Link>
          </aside>

          <aside className={style.head__right}>
            <div className={style.head__image}>
              <img src={woman} alt="woman" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Head;
