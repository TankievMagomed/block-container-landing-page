import React, { useRef } from "react";
import $ from "./Checkbox.module.css";

export const Checkbox = ({ title, ...rest }) => {
  const ref = useRef(null);

  return (
    <label className={$.checkbox__label}>
      <input
        ref={ref}
        className={$.checkbox}
        type="checkbox"
        {...rest}
      />
      <div className={$.checkbox__cover} />
      <span className={$.checkbox__text}>{title}</span>
    </label>
  );
};
