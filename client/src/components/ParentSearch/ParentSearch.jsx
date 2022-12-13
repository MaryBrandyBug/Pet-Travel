import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ParentSerch.css';

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

  const pets = useSelector((store) => store.allParentsStore.allPets);
  console.log(pets);

  const findPets = (id) => {
    // const parent = parents?.filter((el) => el.id === id);
    console.log(id, pets);
    const pet = pets?.filter((el) => el.ParentProfileId === id);
    console.log(pet);
    const types = pet.map((el) => el.type);
    return /* types.map((el) => <p>{el}</p>) */types;
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
            <p>{el.dateSince1} - {el.dateUntil1}</p>
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
    </div>
  );
}
