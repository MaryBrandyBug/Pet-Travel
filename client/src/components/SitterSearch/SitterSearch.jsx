import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SitterSearch.css';
// import search from '../../icons/search.png';
import { Link } from 'react-router-dom';

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

  // const findAva = (id) => {
  //   const usersAvatar = avatar.filter((el) => el.id === id);
  //   return usersAvatar;
  // };

  return (
    <div className="container_SitterSearch">
      <div className="container_SitterSearch_form">
        <form>
          <input
            type="text"
            placeholder="поиск ситтера"
            className="findSetter"
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Найти</button>
        </form>
      </div>
      <div className="container_SitterSearch_content">
        <div className="container_SitterSearch_cards">
          {filteredSitters?.map((el) => (
            <div className="container_SitterSearch_card">
              <div className="SitterSearch_card_photo">
                {el.User.mainPhoto
                  ? <img src={`http://localhost:3001/${el.User.mainPhoto}`} alt="" />
                  : <div className="SitterSearch_card_photo">TEXT</div>
                  <Link to={`/all-sitters/${el.id}`}>Подробнее</Link>
                  }
              </div>
              <div className="SitterSearch_card_name"><span>ИМЯ</span></div>
              <div className="SitterSearch_card_location"><span>{el.country}, {el.city}</span></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
