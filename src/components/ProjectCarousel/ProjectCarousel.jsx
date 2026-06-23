import React, { useState } from "react";
import $ from "./ProjectCarousel.module.css";
import { ArrowButton } from "components/Buttons";
import { ModalCloseButton } from "components/Buttons";

export const ProjectCarousel = ({ title, photos, ...rest }) => {
  const [currentIndexPhoto, setCurrentIndexPhoto] = useState(0);
  const [isFullPhoto, setIsFullPhoto] = useState(false);
  return (
    <div className={$.projectCarousel}>
      <div className={$.projectCarousel__photoBox}>
        <img
          onClick={() => setIsFullPhoto(!isFullPhoto)}
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
      </div>
      <span className={$.projectCarousel__textTitle}>{title}</span>
      {isFullPhoto === true && (
        <div className={$.projectCarousel__photoFull}>
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
          <ModalCloseButton onClickButton={() => setIsFullPhoto(false)} />
        </div>
      )}
    </div>
  );
};
