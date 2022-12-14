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
import Map from '../Map/Map';

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
  // console.log('parents', parents);

  const pets = useSelector((store) => store.allParentsStore.allPets);
  // console.log(pets);

  const findPets = (id) => {
    const pet = pets?.filter((el) => el.ParentProfileId === id);
    const types = pet.map((el) => el.type);
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
      if (types[i] === 'reptile') {
        types[i] = reptile;
      }
      if (types[i] === 'rabbit') {
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
    <div>
      <form>
        <input type="text" placeholder="поиск" />
        <button type="submit">Найти</button>
      </form>
      <div>
        {parents?.map((el) => (
          <div className="infoCard">
            <div>1 ФОТО дома</div>
            <div>АВА ВЛАДЕЛЬЦА</div>
            <p>{el.title}</p>
            <p>{el.dateSince1} {el.dateUntil1}</p>
            <p>{el.city}</p>
            <p>{el.country}</p>

            <Link to={`/all-parents/${el.id}`}>Подробнее</Link>

            <div>
              {findPets(el.id)}
            </div>

            {/* {на одной строчке будут находиться даты С и ПО, город и страна } */}
            {/* {добавить количество животных картинкой + количество} */}
          </div>
        ))}
      </div>
      {/* <Map parents={parents} /> */}
    </div>
  );
}
