import React from 'react';
import $ from './MainInput.module.css';

export const MainInput = ({placeholder, type, className, ...rest}) => {

  return (
    <input className={className} placeholder={placeholder} type={type} {...rest} />
  )
}
