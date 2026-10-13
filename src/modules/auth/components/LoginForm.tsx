import React, { useState } from 'react';
import { Button } from '../../../components/Button/Button';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Вход выполнен для: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <h3>Авторизация (Модуль Auth)</h3>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        style={{ marginBottom: '10px', display: 'block', padding: '5px' }}
      />
      <Button text="Войти" onClick={() => {}} />
    </form>
  );
};
