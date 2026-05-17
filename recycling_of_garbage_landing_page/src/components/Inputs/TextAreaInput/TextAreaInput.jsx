import React from 'react';
import $ from './TextAreaInput.module.css';

export const TextAreaInput = ({children, placeholder, className}) => {
  return (
    <textarea  className={className} placeholder={placeholder}>{children}</textarea>
  )
}

