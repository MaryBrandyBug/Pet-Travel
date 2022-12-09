import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Settings.css';

export default function Setting() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.userStore);

  const [signUpForm, setSignUpForm] = useState({
    email: user?.email,
    name: user?.name,
    role: user?.role,
    surname: user?.surname,
    inst: user?.inst,
    telegram: user?.telegram,
    facebook: user?.facebook,
  });
  const [pass, setPass] = useState({
    password: user?.password,
    confirmPassword: user?.confirmPassword,
  });

  const handleInput = (e) => {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  };
  const handlePassInput = (e) => {
    setPass({ ...pass, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/profile/settings', {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...signUpForm, id: user.id }),
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: 'USER', payload: res }));
    if (response) {
      alert('Изменения сохранены!');
    }
  };

  const handlePassChangeSubmit = async (e) => {
    e.preventDefault();
    if (pass.password === pass.confirmPassword) {
      const response = await fetch('http://localhost:3001/profile/settings/pass', {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...pass, id: user.id }),
      });
      if (response.status === 200) {
        alert('Пароль изменен!');
      }
    } else {
      alert('Пароли не совпадают!');
    }
  };

  const deleteProfile = () => {
    fetch('http://localhost:3001/profile/settings', {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: user.id }),
    })
      .then((res) => {
        if (res.status === 200) { dispatch({ type: 'USER_SIGNOUT', payload: null }); }
      });
    navigate('/');
  };

  return (
    <div className="setting_form">
      <form className="updform" onSubmit={handleSubmit}>
        <div className="data_input">
          <div className="basic_data">
            <div className="form-item">
              <span>Имя</span>
              <input type="text" className="upd" value={user?.name} name="name" onChange={handleInput} />
            </div>
            <div className="form-item">
              <span>Фамилия</span>
              <input type="text" className="upd" value={user?.surname} name="surname" onChange={handleInput} />
            </div>
            <div className="form-item">
              <span>Электронная почта</span>
              <input type="email" className="upd" value={`${user?.email}`} name="email" onChange={handleInput} />
            </div>
            <div className="form-item">
              <span>Пароль</span>
              <input type="password" className="upd" value={user?.password} name="password" onChange={handleInput} />
            </div>
            <div className="form-item">
              <span>Повторите пароль</span>
              <input type="password" className="upd" value={user?.password} name="password" onChange={handleInput} />
            </div>
          </div>
          <div className="form-item">
            {/* <img src="" alt="photo" name="mainPhoto"/> */}
            <span>Фото</span>
            <input type="file" name="mainPhoto" />
            <button type="submit">Добавить фото</button>
          </div>
        </div>
        <div className="social_set">
          <div>
            <h4>
              Соцсети:
            </h4>
          </div>
          <div className="form-item">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input name="facebook" type="text" placeholder="Фэйсбук" onChange={handleInput} />
          </div>
          <div className="form-item">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input name="inst" type="text" placeholder="Инстаграм" onChange={handleInput} />
          </div>
          <div className="form-item">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input name="telegram" type="text" placeholder="Телеграм" onChange={handleInput} />
          </div>
        </div>
        <div className="btn">
          <div className="btn_put">
            <div className="btn_sub">
              <button type="submit">Сохранить изменения</button>
            </div>
          </div>
          <div className="btn_del">
            <div className="btn_sub">
              <button type="button" onClick={() => deleteProfile()}>Удалить профиль</button>
            </div>
          </div>
        </div>
      </form>


    </div>
  );
}
