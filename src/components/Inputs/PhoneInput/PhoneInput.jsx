import React from "react";
import { MainInput } from "../MainInput";

export const PhoneInput = ({
  className,
  placeholder,
  type,
  setValue,
  fieldName,
  error,
  errorMessage,
  ...rest
}) => {
  return (
    <MainInput
      className={className}
      placeholder={placeholder}
      type={type}
      error={error}
      errorMessage={errorMessage}
      {...rest}
      onFocus={(event) => {
        event.target.style.caretColor = "transparent";
        const currentElement = event.target;

        if (!currentElement?.value) {
          setValue(fieldName, "+7(___)___-__-__");
        }

        setTimeout(() => {
          const lustNumberIndex = currentElement?.value.search(/\d(?!.*\d)/);
          if (currentElement?.value[lustNumberIndex + 1] === "_") {
            currentElement?.setSelectionRange(
              lustNumberIndex + 1,
              lustNumberIndex + 1,
            );
          } else {
            currentElement?.setSelectionRange(
              lustNumberIndex + 2,
              lustNumberIndex + 2,
            );
          }
          currentElement.style.caretColor = "auto";
        }, 100);
      }}
      onBlur={(event) => {
        const value = event.target?.value;
        if (value === "+7(___)___-__-__") {
          setValue(fieldName, "");
        }
      }}
      onChange={(event) => {
        event.target.style.caretColor = "transparent";
        const pattern = /\d+/g;
        const currentElement = event.target;
        const value = event.target.value;
        const numString = value.match(pattern);
        const resultSearch = numString?.join("");
        let replaceString = "+7(___)___-__-__";
        if (!resultSearch) {
          return setValue(fieldName, replaceString);
        }
        for (let i = 1; i < resultSearch.length; i++) {
          replaceString = replaceString.replace(/_/, resultSearch[i]);
        }
        setValue(fieldName, replaceString);

        setTimeout(() => {
          const lustNumberIndex = value.search(/\d(?!.*\d)/);

          if (value.length >= replaceString.length) {
            if (value[lustNumberIndex + 1] === "_") {
              currentElement?.setSelectionRange(
                lustNumberIndex + 1,
                lustNumberIndex + 1,
              );
            } else {
              currentElement?.setSelectionRange(
                lustNumberIndex + 2,
                lustNumberIndex + 2,
              );
            }
          } else {
            pattern.test(value[lustNumberIndex]);
            if (!pattern.test(value[lustNumberIndex])) {
              currentElement?.setSelectionRange(
                lustNumberIndex + 1,
                lustNumberIndex + 1,
              );
            }
          }
          currentElement.style.caretColor = "auto";
        }, 100);
      }}
    />
  );
};
