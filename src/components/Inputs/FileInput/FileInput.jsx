import React from 'react';
import $ from './FileInput.module.css';

export const FileInput = ({...rest}) => {
  return (
    <input className={$.input__fileUpload} type="file" {...rest} />
  )
}
