import React, { useState } from "react";
import style from "./style.module.scss";
import triangle from "../../assets/icons/triangle.svg";
import woman from "../../assets/images/question-img.png";

const Faq = () => {
  const [showTextIndex, setShowTextIndex] = useState(null);

  return (
    <section className={style.faq}>
      <div className="container">
        <div className={style.faq__wrapper}>
          <aside className={style.faq__left}>
            <h2>Как участвовать</h2>

            <ul>
              <li>
                <div
                  className={style.faq__item}
                  onClick={() =>
                    setShowTextIndex(showTextIndex === 0 ? null : 0)
                  }
                >
                  <p>Выберите билет</p>
                  <img src={triangle} alt="triangle" />
                </div>

                <p
                  style={
                    showTextIndex !== 0
                      ? { display: "none" }
                      : { display: "block" }
                  }
                >
                  Комбинации в билетах отмечены заранее. Вам просто нужно
                  выбрать один или несколько билетов со своими любимыми или
                  случайными числами. Помните: больше билетов — больше на успех!
                </p>
              </li>

              <li>
                <div
                  className={style.faq__item}
                  onClick={() =>
                    setShowTextIndex(showTextIndex === 1 ? null : 1)
                  }
                >
                  <p>Оплатите</p>
                  <img src={triangle} alt="triangle" />
                </div>

                <p
                  style={
                    showTextIndex !== 1
                      ? { display: "none" }
                      : { display: "block" }
                  }
                >
                  Оплатить билет вы можете любым удобным способом: Банковские
                  карты, QIWI Кошелек, Кошелёк ЮMoney, Система быстрых платежей,
                  SberPay, Альфа-Клик
                </p>
              </li>

              <li>
                <div
                  className={style.faq__item}
                  onClick={() => setShowTextIndex(showTextIndex === 2 ? null : 2)}
                >
                  <p>Следите за розыгрышем</p>
                  <img src={triangle} alt="triangle" />
                </div>

                <p
                  style={
                    showTextIndex !== 2
                      ? { display: "none" }
                      : { display: "block" }
                  }
                >
                  Смотрите трансляции на главных каналах страны
                </p>
              </li>

              <li>
                <div
                  className={style.faq__item}
                  onClick={() => setShowTextIndex(showTextIndex === 3 ? null : 3)}
                >
                  <p>Получите выигрыш</p>
                  <img src={triangle} alt="triangle" />
                </div>

                <p
                  style={
                    showTextIndex !== 3
                      ? { display: "none" }
                      : { display: "block" }
                  }
                >
                  Выигрыши до 600 000 ₽ можно получить онлайн. За более крупными
                  призами обращайтесь в лотерейный центр «Столото».
                </p>
              </li>
            </ul>
          </aside>

          <aside className={style.faq__right}>
            <img src={woman} alt="woman" />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Faq;
