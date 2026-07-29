import React, { useState } from "react";
import $ from "./ReviewsLetters.module.css";
import { MODAL_REVIEWS_DATA } from "constants";
import { FullImage } from "components/FullImage";

export const ReviewsLetters = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  return (
    <div className={$.reviewsLetters__container}>
      <div className={$.reviewsLetters__header}>
        <h1 className={$.reviewsLetters__headerText}>
          Благодарственные письма <br /> от директоров компаний
        </h1>
        <span className={$.reviewsLetters__subHeaderText}>
          Мы зарекомендовали себя как <br />
          надежного и ответственного <br /> партнера{" "}
        </span>
      </div>
      <div className={$.reviewsLetters__letters}>
        {MODAL_REVIEWS_DATA.map(({ title, photos }, index) => {
          return (
            <div
              className={$.reviewsLetters__letter}
              key={title}
            >
              <img
                onClick={() => setSelectedPhotoIndex(index)}
                src={photos}
                alt={title}
              />
            </div>
          );
        })} 
      </div>
      {selectedPhotoIndex !== null && (
        <FullImage
          photos={MODAL_REVIEWS_DATA.map(({ photos }) => photos[0])}
          initialIndex={selectedPhotoIndex}
          onClose={() => setSelectedPhotoIndex(null)}
          modalCloseButtonColor={"#000"}
        />
      )}
    </div>
  );
};
