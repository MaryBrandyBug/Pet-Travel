import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
  console.log(parents);
  return (
    <div>
      <form>
        <input type="text" placeholder="поиск" />
        <button type="submit">Найти</button>
      </form>
      <div>
        {parents?.map((el) => (
          <>
            <div>1 ФОТО дома</div>
            <div>АВА ВЛАДЕЛЬЦА</div>
            <p>{el.title}</p>
            <p>{el.dateSince1} - {el.dateUntil1}</p>
            <p>{el.city}</p>
            <p>{el.country}</p>
            {/* {на одной строчке будут находиться даты С и ПО, город и страна } */}
            {/* {добавить количество животных картинкой + количество} */}
          </>
        ))}
      </div>
    </div>
  );
}
