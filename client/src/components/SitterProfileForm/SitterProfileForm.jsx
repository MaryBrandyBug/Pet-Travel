import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './SitterProfileForm.css';

export default function SitterProfileForm() {
  const user = useSelector((store) => store.userStore.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [checked, setChecked] = useState(false);
  const [sitterProfileForm, setSitterProfileForm] = useState({
    status: '',
    country: '',
    city: '',
    aboutMe: '',
    cats: false,
    dogs: false,
    fish: false,
    horses: false,
    birds: false,
    reptiles: false,
    smallPets: false,
  });
  console.log('=====>>>> ๐๐๐ file: SitterProfileForm.jsx:15 ๐๐๐ SitterProfileForm ๐๐๐ sitterProfileForm', sitterProfileForm);

  const handleInput = (e) => {
    console.log(e.target.files);
    if (e.target.type === 'checkbox') {
      setSitterProfileForm({ ...sitterProfileForm, [e.target.name]: e.target.checked });
      return;
    }
    setSitterProfileForm({ ...sitterProfileForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/profile/create-sitter-profile', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...sitterProfileForm, UserId: user.id }),
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: 'SITTER_PROFILE', payload: res.sitter }));
    navigate('/profile/sitter');
  };
  console.log(sitterProfileForm);
  return (
    <div className="Update_sitter_profile">
      <form onSubmit={handleSubmit} className="form_sitter">
        <div>
          <h3>ะกะพะทะดะฐะฝะธะต ะฟัะพัะธะปั</h3>
        </div>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>ะกัะฐััั</label>
          </div>
          <div className="Update_sitter_input_text">
            <textarea type="text" name="status" onChange={handleInput} />
          </div>
        </div>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>ะกััะฐะฝะฐ</label>
          </div>
          <div className="Update_sitter_input_text">
            <input type="text" name="country" onChange={handleInput} />
          </div>
        </div>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>ะะพัะพะด</label>
          </div>
          <div className="Update_sitter_input_text">
            <input type="text" name="city" onChange={handleInput} />
          </div>
        </div>
        <div className="Update_sitter_input">
          <div className="Update_sitter_input_text">
            <label>ะะฑะพ ะผะฝะต</label>
          </div>
          <div className="Update_sitter_input_text">
            <textarea type="text" name="aboutMe" onChange={handleInput} />
          </div>
        </div>
        <div className="Update_sitter_input">
          <label>
            <input type="checkbox" name="cats" onChange={handleInput} />
            ะะพัะบะธ
          </label>
        </div>
        <div className="Update_sitter_input">
          <label>
            <input type="checkbox" name="dogs" onChange={handleInput} />
            ะกะพะฑะฐะบะธ
          </label>
        </div>
        <div className="Update_sitter_input">
          <label>
            <input type="checkbox" name="fish" onChange={handleInput} />
            ะ?ัะฑั
          </label>
        </div>
        <div className="Update_sitter_input">
          <label>
            <input type="checkbox" name="birds" onChange={handleInput} />
            ะัะธัั
          </label>
        </div>
        <div className="Update_sitter_input">
          <label>
            <input type="checkbox" name="horses" onChange={handleInput} />
            ะะพัะฐะดะธ
          </label>
        </div>
        <div className="Update_sitter_input">
          <label>
            <input type="checkbox" name="reptiles" onChange={handleInput} />
            ะ?ะตะฟัะธะปะธะธ
          </label>
        </div>
        <div className="Update_sitter_input">
          <label>
            <input type="checkbox" name="smallPets" onChange={handleInput} />
            ะะตะปะบะธะต ะถะธะฒะพัะฝัะต
          </label>
        </div>
        <div className="Update_sitter_input">
          <button className="btn_subb" type="submit">ะกะพะทะดะฐัั</button>
        </div>
      </form>
    </div>
  );
}
