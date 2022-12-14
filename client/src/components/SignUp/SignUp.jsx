import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import './SignUp.css';

export default function SignUp() {
  const dispatch = useDispatch();

  const [error, setError] = useState(null);

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
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <h2 className="active"> Регистрация </h2>

            {/* <div className="fadeIn first">
              <img src="client/src/components/Navbar/Pet_1.png" id="icon" alt="User Icon" />
            </div> */}

            <form className="form" onSubmit={handleSubmit}>
              <div className="add_text">
                <div className="form-item">
                  <input type="email" id="email" className="form-input" placeholder="Email" name="email" onChange={handleInput} required />
                </div>
                <div className="form-item">
                  <input type="text" id="name" className="form-input" placeholder="Имя" name="name" onChange={handleInput} required />
                </div>
                <div className="form-item">
                  <input type="password" id="password" className="form-input" placeholder="Пароль" name="password" onChange={handleInput} required />
                </div>
              </div>
              <div className="add_role">
                <div>
                  <p>
                    <input type="radio" name="role" value="sitter" onChange={handleInput} />
                    {' '}
                    Ситтер
                  </p>
                </div>

                <div>
                  <p>
                    <input type="radio" name="role" value="parent" onChange={handleInput} />
                    {' '}
                    Владелец
                  </p>

                </div>
              </div>
              <div className="btn_sub">
                <button type="submit">Зарегистрироваться</button>
              </div>
            </form>
            <p>{error}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
