import React from "react";
import style from "./style.module.scss";
import winner1 from "../../assets/images/winners/1.png";
import winner2 from "../../assets/images/winners/2.png";
import winner3 from "../../assets/images/winners/3.png";

const Winners = () => {
  return (
    <section className={style.winners}>
      <div className="container">
        <div className={style.winners__wrapper}>
          <h2>Победители</h2>

          <ul>
            <li>
              <div className={style.winners__image}>
                <img src={winner1} alt="winner 1" />
              </div>
              <p>Игорь Прогожников</p>
              <div className={style.winners__sum}>
                <p>1 700 000₽</p>
              </div>
            </li>

            <li>
              <div className={style.winners__image}>
                <img src={winner2} alt="winner 1" />
              </div>
              <p>Илья Воснесевский</p>
              <div className={style.winners__sum}>
                <p>1 279 000₽</p>
              </div>
            </li>

            <li>
              <div className={style.winners__image}>
                <img src={winner3} alt="winner 1" />
              </div>
              <p>Маргарита Власова</p>
              <div className={style.winners__sum}>
                <p>880 000₽</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Winners;
