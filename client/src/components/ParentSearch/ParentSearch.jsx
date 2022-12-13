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
      });
  }, []);

  const parents = useSelector((store) => store.allParentsStore.allParentsProfiles);
  console.log('parents', parents);
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
            {/* {на одной строчке будут находиться даты С и ПО, город и страна } */}
            {/* {добавить количество животных картинкой + количество} */}
          </div>
        ))}
      </div>
    </div>
  );
}
