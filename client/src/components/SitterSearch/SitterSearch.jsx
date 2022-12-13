import React, { useEffect, useState } from 'react';
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
  console.log(allSitters?.map((el) => el.city)); // почему здесь auth??

  const [value, setValue] = useState('');
  const filteredSitters = allSitters?.filter((el) => el.city.toLowerCase().includes(value.toLowerCase()));

  return (
    <div className="container_find">
      <form>
        <input
          type="text"
          placeholder="поиск ситтера"
          className="findSetter"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Найти</button>
      </form>
      <div>
        {filteredSitters?.map((el) => (
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
