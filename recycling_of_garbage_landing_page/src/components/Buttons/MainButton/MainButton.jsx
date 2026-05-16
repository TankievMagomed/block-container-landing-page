import React from 'react';
import $ from './MainButton.module.css';

export const MainButton = ({children, onClickButton }) => {
  return (
    <button className={$.buttonMain} onClick={onClickButton}>{children}</button>
  )
}
