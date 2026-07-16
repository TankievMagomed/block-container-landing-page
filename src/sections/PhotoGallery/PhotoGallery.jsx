import React, { useState } from "react";
import $ from "./PhotoGallery.module.css";
import { PHOTO_GALLERY_DATA } from "constants";
import { ArrowButton } from "components";
import { FullImage } from "components/FullImage";

export const PhotoGallery = () => {
  const [currentIndexPhoto, setCurrentIndexPhoto] = useState(0);
  const [isFullPhoto, setIsFullPhoto] = useState(false);
  return (
    <div className={$.photoGallery__section}>
      <h1 className={$.photoGallery__headerText}>
        Фотогалерея выполненных проектов <br /> для наших клиентов
      </h1>
      <span className={$.photoGallery__subHeaderText}>
        Все проекты выполняются четко по требования заказчика, учитывая
        <br /> спецификацию, сроки и бюджет
      </span>
      <div className={$.photoGallery__carousel}>
        {PHOTO_GALLERY_DATA.map(({ photo }, index) => {
          return (
            <div className={$.photoGallery__carouselPhoto}>
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
                className={$.projectCarousel__img}
                onClick={() => setIsFullPhoto(!isFullPhoto)}
                src={photo[currentIndexPhoto]}
                alt={index}
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
              {isFullPhoto && (
                <FullImage
                  photos={photo}
                  title={index}
                  onClose={() => setIsFullPhoto(false)}
                  initialIndex={currentIndexPhoto}
                  modalCloseButtonColor={"#000000"}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
