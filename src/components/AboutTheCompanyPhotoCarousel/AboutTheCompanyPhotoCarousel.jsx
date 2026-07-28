import React, { useState } from "react";
import $ from "./AboutTheCompanyPhotoCarousel.module.css";
import { ABOUT_THE_COMPANY_PHOTO_CAROUSEL_DATA } from "constants";
import { ArrowButton } from "components/Buttons";

export const AboutTheCompanyPhotoCarousel = () => {
  const [currentIndexPhoto, setCurrentIndexPhoto] = useState(0);
  return ABOUT_THE_COMPANY_PHOTO_CAROUSEL_DATA.map(({ photo }) => {
    return (
      <div className={$.aboutTheCompanyPhotoCarousel__section}>
        <ArrowButton
          direction="left"
          onClickButton={() => {
            if (currentIndexPhoto === 0) {
              setCurrentIndexPhoto(photo.length - 1);
            } else {
              setCurrentIndexPhoto(currentIndexPhoto - 1);
            }
          }}
        />
        <img
          className={$.aboutTheCompanyPhotoCarousel__img}
          src={photo[currentIndexPhoto]}
          alt="NotFound"
        />
        <ArrowButton
          direction="right"
          onClickButton={() => {
            if (currentIndexPhoto === photo.length - 1) {
              setCurrentIndexPhoto(0);
            } else {
              setCurrentIndexPhoto(currentIndexPhoto + 1);
            }
          }}
        />
      </div>
    );
  });
};
