import React from 'react';
import $ from './FileInput.module.css';

export const FileInput = ({placeholder}) => {
  return (
    <input placeholder={placeholder} type="file"/>
  )
}
