import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import fish from '../../icons/fish.png';
import cat from '../../icons/cat.png';
import dog from '../../icons/dog.png';
import reptile from '../../icons/reptile.png';
import bird from '../../icons/bird.png';
import rabbit from '../../icons/rabbit.png';
import horse from '../../icons/horse.png';
import './ParentSearch.css';
// import Map from '../Map/Map';

export default function ParentSearch() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3001/all-parents', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: 'ALL_PARENTS', payload: res.allParentsProfiles });
        dispatch({ type: 'ALL_PETS', payload: res.allPets });
      });
  }, []);

  const parents = useSelector((store) => store.allParentsStore.allParentsProfiles);
  console.log('parents', parents);

  const pets = useSelector((store) => store.allParentsStore.allPets);
  // console.log(pets);

  const findPets = (id) => {
    const pet = pets?.filter((el) => el.ParentProfileId === id);
    const allPets = pet.map((el) => el.type);
    const types = allPets.filter((e, i, a) => a.indexOf(e) === i);
    for (let i = 0; i < types.length; i += 1) {
      if (types[i] === 'fish') {
        types[i] = fish;
      }
      if (types[i] === 'bird') {
        types[i] = bird;
      }
      if (types[i] === 'cat') {
        types[i] = cat;
      }
      if (types[i] === 'dog') {
        types[i] = dog;
      }
      if (types[i] === 'reptiles') {
        types[i] = reptile;
      }
      if (types[i] === 'small') {
        types[i] = rabbit;
      }
      if (types[i] === 'horse') {
        types[i] = horse;
      }
    }
    // console.log(types);
    return types.map((el) => <img className="img_animal" src={el} alt="" />);
  };

  return (
    <div className="container_ParentSearch">
      <div className="container_ParentSearch_form">
        <form>
          <input type="text" placeholder="поиск" />
          <button type="submit" id="btn">Найти</button>
        </form>
      </div>
      <div className="container_ParentSearch_content">
        <div className="container_ParentSearch_cards">
          {parents?.map((el) => (
            <div className="container_ParentSearch_card">
              <div className="ParentSearch_card_photo">ФОТО ДОМА ВЛАДЕЛЬЦА</div>
              <div className="ParentSearch_card_title">
                <span>
                  {el.title.length < 20 ? el.title : `${el.title.substring(0, 20)}...`}
                </span>
              </div>
              <div className="ParentSearch_card_date"><span>{el.dateSince1} {el.dateUntil1}</span></div>
              <div className="ParentSearch_card_location"><span>{el.country}, {el.city}</span></div>

              <Link to={`/all-parents/${el.id}`}><span className="ParentSearch_card_link">Подробнее</span></Link>

              <div className="ParentSearch_card_pets">
                {findPets(el.id)}
              </div>

              {/* {на одной строчке будут находиться даты С и ПО, город и страна } */}
              {/* {добавить количество животных картинкой + количество} */}
            </div>
          ))}
        </div>
      </div>
      {/* {
        parents?.length && <Map parents={parents} />
      } */}
    </div>
  );
}
