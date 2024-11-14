import React from "react";
import style from "./style.module.scss";
import first from "../../assets/icons/first.svg";
import ntv from "../../assets/icons/ntv.png";
import car from "../../assets/images/car.png";
import money from "../../assets/images/money.png";

const Gifts = () => {
  return (
    <section className={style.gifts}>
      <div className="container">
        <div className={style.gifts__wrapper}>
          <img src={money} alt="money" />
          <div className={style.gifts__container}>
            <h3>Суперпризы</h3>
            <h2>ОТ 700 000 000 Рублей</h2>

            <div className={style.gifts__tv}>
              <p>Трянсляции идут на главных каналах страны</p>
              <ul>
                <li>
                  <img src={first} alt="first" />
                </li>

                <li>
                  <img src={ntv} alt="first" />
                </li>
              </ul>
            </div>
          </div>
          <img src={car} alt="car" />
        </div>
      </div>
    </section>
  );
};

export default Gifts;
