import React from 'react';
import './AboutUs.css';
import Pictures from './Elbrus.png';

export default function AboutUs() {
  return (
    <div className="About_container">
      <div className="About_text">
        <div>
          <p>
            Dogsy — это онлайн сервис для поиска домашней передержки животных. Мы позволяем хозяину животного найти ситтера, чтобы оставить своего питомца на время.
          </p>
        </div>
        <div>
          <p>
            Мы против клеток зоогостиниц и считаем, что животное должно находиться в привычной домашней обстановке, чтобы не испытывать стресса. Наша миссия — обеспечить животным максимальную заботу на время расставания с хозяином, а хозяину — максимальное спокойствие за своего питомца.
          </p>
        </div>
      </div>
      <div className="About_talk">
        <div className="div_text">
          <div>О нас говорят</div>
        </div>
        <div className="div_photo">
          <div className="talk_photo">
            <img src={Pictures} alt="about" />
          </div>
          <div className="talk_photo">
            <img src={Pictures} alt="about" />
          </div>
          <div className="talk_photo">
            <img src={Pictures} alt="about" />
          </div>
          <div className="talk_photo">
            <img src={Pictures} alt="about" />
          </div>
          <div className="talk_photo">
            <img src={Pictures} alt="about" />
          </div>
        </div>
      </div>
      <div className="About_video">3</div>
      <div className="About_requisites">
        <ul>

          Наши реквизиты
        </ul>
        <ul>

          ООО «Догси.ру»
        </ul>
        <ul>
          ИНН: 9710025430

        </ul>
        <ul>
          ОГРН: 1177746194680

        </ul>
        <ul>
          ООО «Догси.ру» является зарегистрированным оператором, осуществляющим сбор персональных данных пользователей. Номер в Реестре Роскомнадзора 77-17-008692

        </ul>
        <ul>
          Юридический адрес:

        </ul>
        <ul>
          614070, Пермский край, г. Пермь ул. КИМ, д. 101, кв. 164

        </ul>

      </div>
    </div>
  );
}
