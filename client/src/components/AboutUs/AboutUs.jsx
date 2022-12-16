import React from 'react';
import './AboutUs.css';
import Pictures from './Elbrus.png';
import corgi from './corgi.webp';
// import petLogo from './Pet_2.png';

export default function AboutUs() {
  return (
    <div className="About_container">
      <div className="About_text">
        <div>
          <p>
            Pet&Travel — это онлайн платформа для осуществления бартера между владельцами животных и ситтерами-путешественниками. Теперь не нужно переживать, что питомец дома в полном одиночестве, ведь есть ситтеры, которые с удовольствием приглядят за вашим любимцем совершенно бесплатно, и даже дадут ему лекарство, если это требуется. Ну а ситтеру не придется снимать номер в гостинице, и он совсем не против поливать ваши цветы.
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
          <div>О нас говорят:</div>
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
      <div className="About_video"><img src={corgi} alt="" /></div>
      <div className="About_requisites">
        <ul>

          Наши реквизиты
        </ul>
        <ul>
          ИНН: 7979797979

        </ul>
        <ul>
          ОГРН: 17777987235

        </ul>
        <ul>
          Юридический адрес:

        </ul>
        <ul>
          707070, Кошачий край, г. Котовск ул. Большого Крола, д. 101

        </ul>

      </div>
    </div>
  );
}
