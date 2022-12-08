import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import './SignUp.css';

export default function SignUp() {
  const dispatch = useDispatch();

  const [signUpForm, setSignUpForm] = useState({
    email: '', name: '', password: '', role: '',
  });

  const handleInput = (e) => {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/signup', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signUpForm),
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: 'USER', payload: res }));
  };
  return (
    <div>
      <div>
        {/* <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" name="email" onChange={handleInput} />
          <label>Имя</label>
          <input type="text" name="name" onChange={handleInput} />
          <label>Пароль</label>
          <input type="password" name="password" onChange={handleInput} />
          <p>
            <input type="radio" name="role" value="sitter" onChange={handleInput} />
            Ситтер
          </p>
          <p>
            <input type="radio" name="role" value="parent" onChange={handleInput} />
            Владелец
          </p>
          <button type="submit">Зарегистрироваться</button>
        </form> */}
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <h2 className="active"> Регистрация </h2>

            <div className="fadeIn first">
              {/* <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" /> */}
            </div>

            <form>
              <input type="email" id="login" className="fadeIn second" name="email" placeholder="Email" onChange={handleInput} />
              <input type="text" id="password" className="fadeIn third" name="name" placeholder="Имя" onChange={handleInput} />
              <input type="password" id="password" className="fadeIn third" name="password" placeholder="Пароль" onChange={handleInput} />
              <p>
                <input type="radio" name="role" value="sitter" onChange={handleInput} />
                Ситтер
              </p>
              <p>
                <input type="radio" name="role" value="parent" onChange={handleInput} />
                Владелец
              </p>
              <button type="submit">Зарегистрироваться</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
