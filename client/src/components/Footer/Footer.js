import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    // <div>Footer</div>
    <footer>
      <div>
        <Link to="/cat-sitters">Ситтер для кошек</Link>
        <Link to="/dog-sitters">Ситтер для собак</Link>
        <Link to="/top-5-dog-sitting-tips">Топ-5 советов ситтеру для собак</Link>
        <Link to="/7-top-tips-for-senior-pets">Топ-7 советов по уходу за пожилыми питомцами</Link>
        <Link to="/how-to-take-great-pet-photos">Советы: как сделать классные фотографии своего любимца</Link>
        <Link to="/dogs-that-dont-shed">8 пород собак, которые почти не линяют</Link>
        <Link to="/male-vs-female-dogs">Выбираем друга: какого пола питомец подойдет Вам</Link>
        <Link to="/how-to-show-love-in-dog-language">Как показать собаке свою любовь</Link>
        <Link to="/reasons-birds-make-perfect-pets">7 причин завести птицу в качестве питомца</Link>
      </div>
      <div>
        <span>© 2022 Pet&Travel</span>
      </div>
    </footer>
  );
}
