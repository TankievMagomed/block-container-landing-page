import React, { useState } from 'react';
import $ from './SolutionCatalogCard.module.css';
import { FullImage } from "components/FullImage";
import { SOLUTION_CATALOG_DATA } from "constants";

export const SolutionCatalogCard = ({ title, photos, ...rest }) => {
  const [currentIndexPhoto, setCurrentIndexPhoto] = useState(0);
  const [isFullPhoto, setIsFullPhoto] = useState(false);
  return (
    <div className={$.solutionCatalogCard}>
      <div className={$.solutionCatalogCard__photoBox}>
        <img
          className={$.solutionCatalogCard__img}
          onClick={() => setIsFullPhoto(!isFullPhoto)}
          src={photos[currentIndexPhoto]}
          alt={title}
        />
      </div>
      <span className={$.solutionCatalogCard__textTitle}>{title}</span>
      {isFullPhoto && (
        <FullImage
          photos={SOLUTION_CATALOG_DATA.map(({ photos }) => photos[0])}
          initialIndex={currentIndexPhoto}
          onClose={() => setIsFullPhoto(false)}
          modalCloseButtonColor={"#000"}
        />
      )}
    </div>
  );
};

