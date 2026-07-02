import React from 'react';
import $ from './IconCard.module.css'


export const IconCard = ({title, icon, ...rest}) => {
  return (
    <div className={$.iconCard__section}>
        <div className={$.iconCard__icon}>{icon}</div>
      <span className={$.iconCard__text}>{title}</span>
    </div>
  )
}


