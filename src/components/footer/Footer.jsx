import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import org1 from "../../assets/images/minfin.png";
import org2 from "../../assets/images/minsport.png";
import file from "../../assets/privacy_stoloto.pdf";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__wrapper}>
          <aside className={style.footer__left}>
            <Link to="#">
              <img src={logo} alt="logo" />
            </Link>

            <Link to="https://static.stoloto.ru/files/documents/polozhenie_ob_amk_bez_prikaza.pdf">
              Положение о соблюдении антимонопольного законодательства АО «ТК
              «Центр»
            </Link>

            <Link to={file} target="_blank">
              Политика в отношении обработки персональных данных
            </Link>

            <h3>18+</h3>
          </aside>

          <aside className={style.footer__right}>
            <div className={style.footer__organizators}>
              <p>
                Организатор лотереи:{" "}
                <a href="https://minfin.gov.ru/">
                  Министерство финансов Российской Федерации
                </a>
                {" "}
                <a href="https://nloto.ru/docs/%D0%9F%D1%80%D0%B8%D0%BA%D0%B0%D0%B7_%D0%9C%D0%B8%D0%BD%D1%84%D0%B8%D0%BD%D0%B0_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8_%D0%BE%D1%82_17.08.2022_%E2%84%96126%D0%BD.pdf">
                  Лотерея проводится на основании распоряжения Правительства
                  Российской Федерации от 29 августа 2019 г. N 1921-р.
                </a>
              </p>

              <p style={{ fontSize: 12, marginTop: 10, marginBottom: 10 }}>
                Лотереи проводятся на основании распоряжения Правительства
                Российской Федерации от 29 августа 2019 г. № 1921-р. Организатор
                лотерей:{" "}
                <a href="https://minfin.gov.ru/">
                  Министерство финансов Российской Федерации
                </a>
                . Оператор лотерей:{" "}
                <a href="https://static.stoloto.ru/files/documents/polozhenie_ob_amk_bez_prikaza.pdf">
                  ООО «Спортивные Лотереи»
                </a>
                . Тел. 8 800 333-7-333. Сведения о рекламодателе:{" "}
                <a href="https://static.stoloto.ru/files/documents/polozhenie_ob_amk_bez_prikaza.pdf">
                  ООО «Спортивные Лотереи»
                </a>{" "}
                (ОГРН 1195027010386, ИНН 5003133760).
              </p>

              <div>
                <img src={org1} alt="org 1" />
                <p>Минфин России</p>
              </div>

              <div>
                <img src={org2} alt="org 1" />
                <p>Минспорт России</p>
              </div>
            </div>
          </aside>
        </div>

        <p className={style.footer__copyright}>
          Заявленный размер суперприза является минимально гарантированной
          суммой, распределяемой среди победителей в соответствующей категории
          выигрышей. Фраза «Выигрывают 2 билета из 3» означает, что рассчитанная
          математическим путем вероятность совпадения 30 чисел билета до 89-го
          хода включительно (при общем количестве чисел в билете, равном 30,
          и общем количестве шаров в лототроне, равном 90) составляет 1 к 1,5.
          89-й ход («останется 1 шар») будет проведен, в случае если накопленный
          суперприз на начало тиража, розыгрыш которого состоится 09.11.2024,
          будет составлять 120 000 000 рублей или более и в этом тираже не будет
          выигрышей в категории «Суперприз». В противном случае игра пойдет
          до 86-го хода включительно. Фраза «Квартира мечты за 30 000 000 ₽»
          указывает на денежный эквивалент квартиры, разыгрываемой в рамках
          тиражного предложения в тираже № 624. «ВГЛ 4 Спорт», алгоритм
          определения выигрышей № 2, срок проведения лотереи — до 31.12.2029.
          Подробности о лотерее — на stoloto.ru или по телефону 8 900 555-00-55.
          Розыгрыши проводятся еженедельно. Выигрыши носят вероятностный
          характер. Лотерея не является способом заработка и источником дохода.
          АО «ТК «Центр», ОГРН 1127746385095, адрес: 109316, Москва,
          Волгоградский пр-т, д. 43, корп. 3, этаж 10, пом. XXV, ком. 13Б.
          Реклама. 18+
        </p>
      </div>
    </footer>
  );
};

export default Footer;
