import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './SitterPage.css';
import { useSelector } from 'react-redux';

export default function SitterPage() {
  const { id } = useParams();
  const [sitter, setSitter] = useState({});

  const user = useSelector((store) => store.userStore.auth);

  useEffect(() => {
    fetch(`http://localhost:3001/all-sitters/${id}`, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        setSitter(data);
      });
  }, []);
  console.log(sitter.sitterPh1);
  const handleCreateChat = () => {
    fetch(`http://localhost:3001/all-sitters/chat/${id}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userFrom: user.id, userTo: sitter.UserId }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="container_sitterPage">
      {/* <div className="sliderContainer">
        {sitter.sitterPh1 !== null
          ? <img src={`http://localhost:3001/${sitter.sitterPh1}`} alt="alt" />
          : <div>нету</div> }
        {sitter.sitterPh2 !== null
          ? <img src={`http://localhost:3001/${sitter.sitterPh2}`} alt="alt" />
          : <div>нету</div> }
        {sitter.sitterPh3 !== null
          ? <img src={`http://localhost:3001/${sitter.sitterPh3}`} alt="alt" />
          : <div>нету</div> }
        {sitter.sitterPh4 !== null
          ? <img src={`http://localhost:3001/${sitter.sitterPh4}`} alt="alt" />
          : <div>нету</div> }
        {sitter.sitterPh5 !== null
          ? <img src={`http://localhost:3001/${sitter.sitterPh5}`} alt="alt" />
          : <div>нету</div> }

      </div> */}

      <div className="sitterInfo">
        <div className="sitterName">
          <h3>{sitter?.User?.name}</h3>
        </div>
        <div className="location">
          <span>{sitter?.country}, {sitter?.city}</span>
        </div>
        <div className="parent_chatBtn">
          <Link to={`/all-sitters/chat/${id}`}><button type="button" onClick={handleCreateChat}>Чат</button></Link>
        </div>
      </div>

      <div className="details">
        <div className="aboutSitter">
          <h4>Обо мне</h4>
          <span>{sitter?.aboutMe}</span>
        </div>
        <div className="pets">
          <h3>Есть опыт ухода за:</h3>
          {sitter?.birds ? (
            <div><span>Птицы</span></div>
          ) : (<div />)}
          {sitter?.cats ? (
            <div><span>Кошки</span></div>
          ) : (<div />)}
          {sitter?.dogs ? (
            <div><span>Собаки</span></div>
          ) : (<div />)}
          {sitter?.fish ? (
            <div><span>Рыбы</span></div>
          ) : (<div />)}
          {sitter?.horses ? (
            <div><span>Лошади</span></div>
          ) : (<div />)}
          {sitter?.reptiles ? (
            <div><span>Рептилии</span></div>
          ) : (<div />)}
          {sitter?.smallPets ? (
            <div><span>Мелкие животные</span></div>
          ) : (<div />)}
        </div>
      </div>

    </div>

  );
}
