import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Settings.css';
// import imgg from '../Navbar/Pet_1.png';

export default function Setting() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.userStore.auth);

  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const sendFile = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('avatar', img);
      data.append('id', user.id);

      await axios.post('http://localhost:3001/profile/upload', data, {
        headers: {
          'content-type': 'mulpipart/form-data',
        },
      })
        .then((res) => {
          console.log(res);
          setAvatar(`http://localhost:3001/${res.data.photo}`);
          dispatch({ type: 'USER', payload: res.data.auth });
        });
    } catch (error) {
      console.log(error);
    }
  };

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
      alert('?????????????????? ??????????????????!');
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
        alert('???????????? ??????????????!');
      }
    } else {
      alert('???????????? ???? ??????????????????!');
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
              <span>??????</span>
              <input type="text" className="upd" value={signUpForm.name} name="name" onChange={handleInput} />
            </div>
            <div className="form-item">
              <span>??????????????</span>
              <input type="text" className="upd" value={(signUpForm.surname ? signUpForm.surname : '?????????????? ??????????????')} name="surname" onChange={handleInput} />
            </div>
            <div className="form-item">
              <span>?????????????????????? ??????????</span>
              <input type="email" className="upd" value={signUpForm.email} name="email" onChange={handleInput} />
            </div>
          </div>
          <div className="form-itemm">
            <span>????????</span>
            {
              avatar
                ? <img className="logo" src={`${avatar}`} alt="avatar" />
                : <img className="logo" src={`http://localhost:3001/${user?.mainPhoto}`} alt="avatar" />
            }
            <input type="file" onChange={(e) => setImg(e.target.files[0])} />
            <div className="btn_sub">
              <button className="btn_send_review" type="button" onClick={sendFile}>???????????????? ????????</button>
            </div>
          </div>
        </div>
        <div className="btn">
          <div className="btn_put">
            <div className="btn_sub">
              <button className="btn_send_review" type="submit">?????????????????? ??????????????????</button>
            </div>
          </div>
        </div>
      </form>
      <form className="updform" onSubmit={handlePassChangeSubmit}>
        <div className="data_input">
          <div className="basic_data">
            <div className="form-item">
              <span>????????????</span>
              <input type="password" className="upd" autoComplete="as" placeholder="****" name="password" onChange={handlePassInput} />
            </div>
            <div className="form-item">
              <span>?????????????????? ????????????</span>
              <input type="password" className="upd" autoComplete="as" placeholder="****" name="confirmPassword" onChange={handlePassInput} />
            </div>
          </div>
        </div>
        <div className="btn">
          <div className="btn_put">
            <div className="btn_sub">
              <button type="submit">???????????????? ????????????</button>
            </div>
          </div>
        </div>
      </form>
      <div className="btn_del">
        <div className="btn_sub">
          <button type="button" onClick={() => deleteProfile()}>?????????????? ??????????????</button>
        </div>
      </div>
    </div>
  );
}
