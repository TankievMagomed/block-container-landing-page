import React from 'react';
import $ from './TextAreaInput.module.css';

export const TextAreaInput = ({children, placeholder, className, error, errorMessage, ...rest}) => {
  return (
    <>
      <textarea  className={`${$.textArea} ${!!error && $.textAreaErrors} ${className}`} placeholder={placeholder} {...rest}>{children}</textarea>
        {!!error && (
        <span className={$.textArea__errorMassage}>
          {errorMessage || error.message}
        </span>
        )}
    </>
  )
}

