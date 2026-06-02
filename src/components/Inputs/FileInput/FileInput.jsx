import React from 'react';
import $ from './FileInput.module.css';

export const FileInput = ({placeholder, ...rest}) => {
  return (
    <input className={$.input__fileUpload} placeholder={placeholder} type="file" {...rest} />
  )
}
