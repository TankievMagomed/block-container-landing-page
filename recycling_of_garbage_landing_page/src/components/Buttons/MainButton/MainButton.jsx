import React from 'react';
import $ from './MainButton.module.css';

export const MainButton = ({children, onClickButton, type, className }) => {
  return (
    <button className={`${$.buttonMain} ${className}`} onClick={onClickButton} type={type}>{children}</button>
  )
}
