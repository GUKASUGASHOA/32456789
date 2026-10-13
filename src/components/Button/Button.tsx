import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button style={{ padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }} onClick={onClick}>
      {text}
    </button>
  );
};
