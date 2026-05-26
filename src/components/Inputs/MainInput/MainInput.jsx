import React from 'react';
import $ from './MainInput.module.css';

export const MainInput = ({placeholder, type, className, error, errorMessage, ...rest}) => {

  return (
    <>
    <input className={`${$.input} ${!!error && $.inputErrors} ${className}`} placeholder={placeholder} type={type} {...rest} />
    {!!error && (
        <span className={$.input__errorMassage}>
          {errorMessage || error.message}
        </span>
        )}
    </>
  )
}
