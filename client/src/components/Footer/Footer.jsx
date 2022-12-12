import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import facebook from './facebook.png';
import instagram from './instagram.png';
import whatsapp from './whatsapp.png';
import telegram from './telegram.png';

export default function Footer() {
  return (

    <div className="footer">
      <div className="contain">
        <div className="col">
          <h1>Ситтер</h1>
          <ul>
            <li><Link to="/cat-sitters">Для кошек</Link></li>
            <li><Link to="/dog-sitters">Для собак</Link></li>
          </ul>
        </div>
        <div className="col">
          <h1>Советы ситтеру</h1>
          <ul>
            <li><Link to="/how-to-take-great-pet-photos">Как сделать классные фотографии своего любимца</Link></li>
            <li><Link to="/7-top-tips-for-senior-pets">Советы по уходу за пожилыми питомцами</Link></li>
            <li><Link to="/top-5-dog-sitting-tips">Советы ситтеру для собак</Link></li>
            <li><Link to="/7-top-tips-for-senior-pets">Советы по уходу за пожилыми питомцами</Link></li>
          </ul>
        </div>
        <div className="col">
          <h1>О Животных</h1>
          <ul>
            <li><Link to="/dogs-that-dont-shed">8 пород собак, которые почти не линяют</Link></li>
            <li><Link to="/male-vs-female-dogs">Выбираем друга: какого пола питомец подойдет Вам</Link></li>
          </ul>
        </div>
        <div className="col">
          <h1>Общее</h1>
          <ul>
            <li><Link to="/how-to-show-love-in-dog-language">Как показать собаке свою любовь</Link></li>
            <li><Link to="/reasons-birds-make-perfect-pets">7 причин завести птицу в качестве питомца</Link></li>
          </ul>
        </div>
        <div className="col social">
          <h1>Мы в социальных сетях</h1>
          <ul>
            <li><Link to="https://ru.wikipedia.org/wiki/Whatsaap"><img src={whatsapp} alt="whatsup" width="32" style={{ width: `${32}px` }} /></Link></li>
            <li><Link to="https://ru.wikipedia.org/wiki/Instagram"><img src={instagram} alt="inst" width="32" style={{ width: `${32}px` }} /></Link></li>
            <li><Link to="https://t.me/A_151514"><img src={telegram} alt="telegram" style={{ width: `${32}px` }} /></Link></li>
            <li><Link to="https://ru.wikipedia.org/wiki/Facebook"><img src={facebook} alt="facebook" width="32" style={{ width: `${32}px` }} /></Link></li>
          </ul>
        </div>
        <div className="clearfix">
          <span>© 2022 Pet&Travel</span>
        </div>
      </div>
    </div>
  );
}
