import React from 'react';

export default function SignIn() {
  return (
    <div>
      <div>
        <form>
          <label>Email</label>
          <input type="email" name="email" />
          <label>Пароль</label>
          <input type="password" name="password" />
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
}
