import React from 'react';
import $ from './FileInput.module.css';

export const FileInput = ({placeholder, ...rest}) => {
  return (
    <input placeholder={placeholder} type="file" {...rest} />
  )
}
