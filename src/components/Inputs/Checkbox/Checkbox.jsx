import React, {useRef} from 'react'
import $ from './Checkbox.module.css'

export const Checkbox = ({ title, type, ...rest }) => {
  const ref = useRef(null);

  return (
    <label className={$.checkbox__label}>
      <input ref={ref} className={$.checkbox} type="checkbox"/>
      <div className={$.checkbox__cover}/>
      <span className={$.checkbox__text} {...rest}>{title}</span>
    </label>
  )
}
