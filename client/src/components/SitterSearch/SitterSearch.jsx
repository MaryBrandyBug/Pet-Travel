import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function SitterSearch() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3001/all-sitters', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: 'ALL_SITTERS', payload: res.allSittersProfiles });
      });
  }, []);

  const allSitters = useSelector((store) => store.allSittersStore.allSittersProfiles);
  // добавить в бд имя ситтера
  console.log(allSitters); // почему здесь auth??
  return (
    <div>
      <form>
        <input type="text" placeholder="поиск ситтера" />
        <button type="submit">Найти</button>
      </form>
      <div>
        {allSitters?.map((el) => (
          <>
            <div>ТУТ ФОТКА</div>
            <div>{el.city}</div>
            <div>{el.country}</div>
          </>
        ))}
      </div>
    </div>
  );
}
