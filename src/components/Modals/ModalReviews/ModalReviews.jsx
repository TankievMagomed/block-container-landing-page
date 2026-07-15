import React, { useState } from "react";
import $ from "./ModalReviews.module.css";
import { MODAL_REVIEWS_DATA } from "constants";
import { FullImage } from "components/FullImage";
import { ModalCloseButton } from "components/Buttons";

export const ModalReviews = ({handleCloseModal}) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  return (
    <div className={$.modalReviews__container}>
      <ModalCloseButton onClickButton={handleCloseModal} color={"#000"} />
      <div className={$.modalReviews__header}>
        <h1 className={$.modalReviews__headerText}>
          Благодарственные письма <br /> от директоров компаний
        </h1>
        <span className={$.modalReviews__subHeaderText}>
          Мы зарекомендовали себя как <br />
          надежного и ответственного <br /> партнера{" "}
        </span>
      </div>
      <div className={$.modalReviews__letters}>
        {MODAL_REVIEWS_DATA.map(({ title, photos }, index) => {
          return (
            <div
              className={$.modalReviews__letter}
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
