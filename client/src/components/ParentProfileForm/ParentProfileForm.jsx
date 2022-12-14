import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './ParentProfileForm.css';

export default function ParentProfileForm() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userStore.auth);
  const navigate = useNavigate();

  const [pets, setPets] = useState([{}]);
  // const [dateDiv2, setDateDiv2] = useState('hidden');
  // const [dateDiv3, setDateDiv3] = useState('hidden');

  const [parentProfileForm, setParentProfileForm] = useState({
    title: '',
    introduction: '',
    location: '',
    country: '',
    city: '',
    responsibilities: '',
    dateSince1: '',
    dateUntil1: '',
    dateSince2: '',
    dateUntil2: '',
    dateSince3: '',
    dateUntil3: '',
  });

  const handleInput = (e) => {
    setParentProfileForm({ ...parentProfileForm, [e.target.name]: e.target.value });
  };

  // const handleAddDate2 = () => (
  //   setDateDiv2('visible')
  // );

  // const handleAddDate3 = () => (
  //   setDateDiv3('visible')
  // );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pets);
    parentProfileForm.pets = pets;
    fetch('http://localhost:3001/profile/create-parent-profile', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...parentProfileForm, UserId: user.id }),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: 'PARENT_PROFILE', payload: res.profile });
        dispatch({ type: 'PET', payload: res.pet });
      });
    navigate('/profile/parent');
  };

  const handlePet = (e, i) => {
    console.log(e, i);
    const newPets = pets.map((el, j) => {
      if (i === j) {
        console.log(e, el);
        if (e.target.type === 'radio') {
          return { ...el, type: e.target.value };
        }

        return { ...el, [e.target.name]: e.target.value };
      }
      return el;
    });

    setPets(newPets);
  };

  const pet = (i) => {
    console.log(i);
    return (
      <>
        {/* <button type="button">???????????????? ???????? ??????????????</button> */}
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>?????? ??????????????</label>
          </div>
          <div className="Update_sitter_input_text">
            <input type="text" name="petName" onChange={(e) => handlePet(e, i)} />
          </div>
        </div>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>?????????????? ??????????????</label>
          </div>
          <div className="Update_sitter_input_text">
            <input type="text" name="petAge" onChange={(e) => handlePet(e, i)} />
          </div>
        </div>
        <div className="radio_input_pet">
          {/* 2022-12-16T10:53:11.108Z-mainphotoPet.jpg */}
          <p>
            <input type="radio" name={`type${i}`} value="cat" onChange={(e) => handlePet(e, i)} />
            ??????????
          </p>
          <p>
            <input type="radio" name={`type${i}`} value="dog" onChange={(e) => handlePet(e, i)} />
            ????????????
          </p>
          <p>
            <input type="radio" name={`type${i}`} value="bird" onChange={(e) => handlePet(e, i)} />
            ??????????
          </p>
          <p>
            <input type="radio" name={`type${i}`} value="fish" onChange={(e) => handlePet(e, i)} />
            ??????????
          </p>
          <p>
            <input type="radio" name={`type${i}`} value="horse" onChange={(e) => handlePet(e, i)} />
            ????????????
          </p>
          <p>
            <input type="radio" name={`type${i}`} value="small" onChange={(e) => handlePet(e, i)} />
            ???????????? ????????????????
          </p>
          <p>
            <input type="radio" name={`type${i}`} value="reptiles" onChange={(e) => handlePet(e, i)} />
            ????????????????
          </p>
        </div>
      </>
    );
  };

  return (
    <div className="Update_sitter_profile">
      <form onSubmit={handleSubmit} className="form_parent">
        <div>
          <h3>???????????????? ??????????????</h3>
        </div>
        {/* <button type="button">???????????????? ????????</button> */}
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>??????????????????</label>
          </div>
          <div className="Update_sitter_input_text">
            <input type="text" name="title" onChange={handleInput} />
          </div>
        </div>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>????????????</label>
          </div>
          <div className="Update_sitter_input_text">
            <input type="text" name="country" onChange={handleInput} />
          </div>
        </div>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>??????????</label>
          </div>
          <div className="Update_sitter_input_text">
            <input type="text" name="city" onChange={handleInput} />
          </div>
        </div>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>????????????????</label>
          </div>
          <div className="Update_sitter_input_text">
            <input type="text" name="introduction" onChange={handleInput} />
          </div>
        </div>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>?????? & ??????????????</label>
          </div>
          <div className="Update_sitter_input_text">
            <input type="text" name="location" onChange={handleInput} />
          </div>
        </div>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>??????????????????????</label>
          </div>
          <div className="Update_sitter_input_text">
            <input type="text" name="responsibilities" onChange={handleInput} />
          </div>
        </div>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>??</label> {/* ???????? 1 */}
          </div>
          <div className="Update_sitter_input_text">
            <input type="date" name="dateSince1" onChange={handleInput} />
          </div>
        </div>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>????</label>
          </div>
          <div className="Update_sitter_input_text">
            <input type="date" name="dateUntil1" onChange={handleInput} />
          </div>
        </div>
        {/* <div style={{ visibility: `${dateDiv2}` }}>
          <div className="Update_sitter_input">
            <div className="Update_sitter_input_text">
              <label>??</label>
            </div>
            <div className="Update_sitter_input_text">
              <input type="date" name="dateSince2" value="" onChange={handleInput} />
            </div>
          </div>
          <div className="Update_sitter_input">
            <div className="Update_sitter_input_text">
              <label>????</label>
            </div>
            <div className="Update_sitter_input_text">
              <input type="date" name="dateUntil2" value="" onChange={handleInput} />
            </div>
          </div>
        </div>
        <div style={{ visibility: `${dateDiv3}` }}>
          <div className="Update_sitter_input">
            <div className="Update_sitter_input_text">
              <label>??</label>
            </div>
            <div className="Update_sitter_input_text">
              <input type="date" name="dateSince3" value="" onChange={handleInput} />
            </div>
          </div>
          <div className="Update_sitter_input">
            <div className="Update_sitter_input_text">
              <label>????</label>
            </div>
            <div className="Update_sitter_input_text">
              <input type="date" name="dateUntil3" value="" onChange={handleInput} />
            </div>
          </div>
        </div> */}
        {/* <button type="button" onClick={handleAddDate2}>???????????????? ????????</button>
        <button type="button" onClick={handleAddDate3}>???????????????? ????????</button> */}
        <h4>???????? ??????????????:</h4>
        {pets.map((el, i) => pet(i))}
        {/* pet */}
        <div className="Update_sitter_input">
          <button className="btn_subb" type="button" onClick={() => { setPets([...pets, {}]); }}>???????????????? ??????????????</button>
        </div>
        <div className="Update_sitter_input">
          <button className="btn_subb" type="submit">??????????????</button>
        </div>
      </form>
    </div>
  );
}
