import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './SignIn.css';

export default function SignIn() {
  const dispatch = useDispatch();

  const [error, setError] = useState(null);

  const [signInForm, setSignInForm] = useState({ email: '', password: '' });

  const handleInput = (e) => {
    setSignInForm({ ...signInForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/signin', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signInForm),
    })
      .then((res) => res.json())
      .then(
        (res) => {
          dispatch({ type: 'USER', payload: res.auth });
          setError(res.error);
        },
      );
  };
  return (
    <div>
      <div>
        {/* <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" name="email" onChange={handleInput} />
          <label>Пароль</label>
          <input type="password" name="password" onChange={handleInput} />
          <button type="submit">Войти</button>
        </form> */}
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <h2 className="active"> Вход </h2>

            {/* <div className="fadeIn first">
              <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
            </div> */}

            <form className="form" onSubmit={handleSubmit}>
              <div className="add_text">
                <div className="form-item">
                  <input type="email" id="login" className="form-input" placeholder="Email" name="email" onChange={handleInput} required />
                </div>
                <div className="form-item">
                  <input type="password" id="password" className="form-input" placeholder="Пароль" name="password" onChange={handleInput} required />
                </div>
              </div>
              <div className="btn_sub">
                <button type="submit">Войти</button>
              </div>
            </form>
            <p>{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
