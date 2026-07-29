import React, { useState, useEffect } from "react";
import $ from "./AboutTheCompanyPhotoCarousel.module.css";
import { ABOUT_THE_COMPANY_PHOTO_CAROUSEL_DATA } from "constants";
import { ArrowButton } from "components/Buttons";

export const AboutTheCompanyPhotoCarousel = () => {
  const [currentIndexPhoto, setCurrentIndexPhoto] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      if (
        currentIndexPhoto ===
        ABOUT_THE_COMPANY_PHOTO_CAROUSEL_DATA[0].photo.length
      ) {
        setIsJumping(true);
        setCurrentIndexPhoto(0);
      } else {
        setCurrentIndexPhoto(currentIndexPhoto + 1);
      }
    }, 2500);

    return () => {
      clearInterval(id);
    };
  }, [currentIndexPhoto]);
  useEffect(() => {
    if (isJumping) {
      const id = requestAnimationFrame(() => setIsJumping(false));
      return () => cancelAnimationFrame(id);
    }
  }, [isJumping]);

  return ABOUT_THE_COMPANY_PHOTO_CAROUSEL_DATA.map(({ photo }, index) => {
    return (
      <div className={$.aboutTheCompanyPhotoCarousel__section}>
        <ArrowButton
          direction="left"
          onClickButton={() => {
            if (currentIndexPhoto === 0) {
              setIsJumping(true);
              setCurrentIndexPhoto(photo.length - 1);
            } else {
              setCurrentIndexPhoto(currentIndexPhoto - 1);
            }
          }}
        />
        <div
          className={$.aboutTheCompanyPhotoCarousel__track}
          style={{
            transform: `translateX(-${currentIndexPhoto * 100}%)`,
            transition: isJumping ? "none" : "transform 0.5s ease",
          }}
          onTransitionEnd={() => {
            if (currentIndexPhoto === photo.length) {
              setIsJumping(true);
              setCurrentIndexPhoto(0);
            }
          }}
        >
          {[...photo, photo[0]].map((src, i) => (
            <img
              key={i}
              className={$.aboutTheCompanyPhotoCarousel__img}
              src={src}
              alt="NotFound"
            />
          ))}
        </div>
        <ArrowButton
          direction="right"
          onClickButton={() => {
            if (
              currentIndexPhoto ===
              photo.length
            ) {
              setIsJumping(true);
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
