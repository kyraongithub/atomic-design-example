import React from 'react';

const Input = ({ type, placeholder = 'test input' }) => {
  return <input type={type} placeholder={placeholder} />;
};

export default Input;
