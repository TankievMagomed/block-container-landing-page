import React from 'react';
import $ from './Functionality.module.css';


export const Functionality = () => {
  return (
    <div className={$.functionality__section}>
       <h1 className={$.functionality__headerText}>
         Варианты планировок, внутреннего <br /> снабжения и отделки
      </h1>
      <span className={$.functionality__subHeaderText}>
        Обеспечим блок-контейнеры и модульные здания всем
        <br /> необходимым под ключ!
      </span>
    </div>
  )
}

