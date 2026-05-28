import React from 'react'
import $ from "./Chip.module.css";

export const Chip = ({children}) => {
  return (
    <div className={$.chip__container}>
      {children}
    </div>
  )
}

