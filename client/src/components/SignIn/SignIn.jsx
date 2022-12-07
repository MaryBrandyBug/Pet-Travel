import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function SignIn() {
  const dispatch = useDispatch();

  const [signInForm, setSignInForm] = useState({ email: '', password: '' });

  const handleInput = (e) => {
    setSignInForm({ ...signInForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/signin', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signInForm),
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: 'USER', payload: res }));
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" name="email" onChange={handleInput} />
          <label>Пароль</label>
          <input type="password" name="password" onChange={handleInput} />
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
}
