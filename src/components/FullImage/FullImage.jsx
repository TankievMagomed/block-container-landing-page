import React, { useState } from "react";
import $ from "./FullImage.module.css";
import { ArrowButton } from "components/Buttons";
import { ModalCloseButton } from "components/Buttons";

export const FullImage = ({
  title,
  photos,
  onClose,
  initialIndex,
  ...rest
}) => {
  const [currentIndexPhoto, setCurrentIndexPhoto] = useState(initialIndex);
  return (
    <div className={$.fullImage__section}>
      <img
        src={photos[currentIndexPhoto]}
        alt={title}
      />
      <ArrowButton
        direction="left"
        onClickButton={() => {
          if (currentIndexPhoto === 0) {
            setCurrentIndexPhoto(photos.length - 1);
          } else {
            setCurrentIndexPhoto(currentIndexPhoto - 1);
          }
        }}
      />
      <ArrowButton
        direction="right"
        onClickButton={() => {
          if (currentIndexPhoto === photos.length - 1) {
            setCurrentIndexPhoto(0);
          } else {
            setCurrentIndexPhoto(currentIndexPhoto + 1);
          }
        }}
      />
      <ModalCloseButton onClickButton={onClose} />
    </div>
  );
};
