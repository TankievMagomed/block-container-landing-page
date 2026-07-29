import React from "react";
import $ from "./Reviews.module.css";
import { ReviewsLetters, ReviewsGetSolution } from "components";

export const Reviews = () => {
  return (
      <div className={$.reviews__section}>
        <ReviewsLetters/>
      <ReviewsGetSolution />
    </div>
  );
};
