import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './SitterProfile.css';

export default function SitterProfile() {
  const sitter = useSelector((store) => store.sitterStore.sitter);
  const cats = sitter?.cats;
  const dogs = sitter?.dogs;
  const reptiles = sitter?.reptiles;
  const fish = sitter?.fish;
  const smallPets = sitter?.smallPets;
  const horses = sitter?.horses;
  const birds = sitter?.birds;
  function careAboute() {
    const pets = [];
    if (cats) {
      pets.push('кошки');
    }
    if (dogs) {
      pets.push('собаки');
    }
    if (reptiles) {
      pets.push('рептилии');
    }
    if (fish) {
      pets.push('рыбы');
    }
    if (smallPets) {
      pets.push('мелкие животные');
    }
    if (horses) {
      pets.push('лошади');
    }
    if (birds) {
      pets.push('птицы');
    }
    return pets;
  }
  // console.log(careAboute());

  return (
    <div>
      {sitter
        ? (
          <div>
            <div>
              <h3>Ваш профиль</h3>
              <div>ТУТ ФОТКИ ТИПА</div>
              <div>
                <span>{sitter?.city}, {sitter?.country}</span>
              </div>
              <div>
                <div>
                  <h4>Обо мне</h4>
                  <p>{sitter?.aboutMe}</p>
                </div>
                <h4>Есть опыт ухода за: </h4>
                <div className="petList">{careAboute().map((el) => <p className="pets">{el}</p>)}<div />
                </div>
              </div>
            </div>
          </div>
        )
        : (
          <Link to="/profile/create-sitter-profile">
            <button type="button">Заполнить анкету</button>
          </Link>
        )}
    </div>
  );
}
