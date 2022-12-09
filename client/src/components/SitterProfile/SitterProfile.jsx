import React from 'react';
import { useSelector } from 'react-redux';

export default function SitterProfile() {
  const sitter = useSelector((store) => store.sitterStore);
  console.log(sitter);
  return (
    <div>
      <div>
        <h3>Ваш профиль</h3>
        <div>ТУТ ФОТКИ ТИПА</div>
        <div>
          <h4>Обо мне</h4>
          <p>инфо</p>
        </div>
      </div>
    </div>
  );
}
