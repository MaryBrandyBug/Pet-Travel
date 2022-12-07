import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

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
            {/* <li><img src="https://svgshare.com/i/5fq.svg" width="32" style="width: 32px;" /></li>
            <li><img src="https://svgshare.com/i/5eA.svg" width="32" style="width: 32px;" /></li>
            <li><img src="https://svgshare.com/i/5f_.svg" width="32" style="width: 32px;" /></li> */}
          </ul>
        </div>
        <div className="clearfix">
          <span>© 2022 Pet&Travel</span>
        </div>
      </div>
    </div>
  );
}
