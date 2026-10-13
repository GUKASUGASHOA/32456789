import React from 'react';

export const UserCard: React.FC = () => {
  return (
    <div style={{ border: '1px solid #00c', padding: '20px', borderRadius: '8px', marginTop: '15px' }}>
      <h3>Профиль (Модуль Profile)</h3>
      <p>Имя: Иван Иванов</p>
      <p>Роль: Администратор</p>
    </div>
  );
};
