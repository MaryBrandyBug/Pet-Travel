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

  // console.log(allSitters?.map((el) => el.city)); // почему здесь auth??

  const [value, setValue] = useState('');
  const filteredSitters = allSitters?.filter((el) => el.city.toLowerCase().includes(value.toLowerCase()));

  return (

    <div className="container_SitterSearch">
      <div className="container_SitterSearch_form">
        <form>
          <input
            type="text"
            placeholder="поиск"
            className="findSetter"
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Найти</button>
        </form>
      </div>
      <div className="container_SitterSearch_content">
        <div className="container_SitterSearch_cards">
          {filteredSitters?.map((el) => (
            <Link to={`/all-sitters/${el.id}`}>
              <div className="container_SitterSearch_card">
                <div className="SitterSearch_card_photo">
                  {el.User.mainPhoto
                    ? <img src={`http://localhost:3001/${el.User.mainPhoto}`} alt="" />
                    : <div className="SitterSearch_card_photo">TEXT</div>}
                </div>
                <div className="SitterSearch_card_name"><span>{el.User.name}</span></div>
                <div className="SitterSearch_card_location"><span>{el.country}, {el.city}</span></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
