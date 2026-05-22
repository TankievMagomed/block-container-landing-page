import React from 'react';
import $ from './TextAreaInput.module.css';

export const TextAreaInput = ({children, placeholder, className, ...rest}) => {
  return (
    <textarea  className={className} placeholder={placeholder} {...rest}>{children}</textarea>
  )
}

