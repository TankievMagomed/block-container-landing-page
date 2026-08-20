import React from "react";
import $ from "./AboutTheCompany.module.css";
import { AboutTheCompanyPhotoCarousel } from "components";
import { ABOUT_THE_COMPANY_CHIP_INFO_DATA } from "../../constants/AboutTheCompanyChipInfoData";
import { ABOUT_THE_COMPANY_CHIP_ICON_DATA } from "constants";
import { ServiceChip } from "components";

export const AboutTheCompany = () => {
  return (
    <div
      className={$.aboutTheCompany__section}
      id="aboutTheCompany"
    >
      <div className={$.aboutTheCompany__headlineField}>
        <h1 className={$.aboutTheCompany__headerText}> О компании</h1>
        <span className={$.aboutTheCompany__subHeaderText}>
          Группа компаний "БК-РЕCУРC" занимается <br /> проектированием,
          производством и продажей блок- <br /> контейнеров и модульных зданий с
          2015 года.
        </span>
      </div>
      <div className={$.aboutTheCompany__contentField}>
        <AboutTheCompanyPhotoCarousel />
        {/* <iframe
          className={$.aboutTheCompany__youTubeVideoPlayer}
          src="https://www.youtube.com/embed/jU8XHVsoAWI?si=UYK30Q0hvvLmK2GV"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe> */}
      </div>
      <div className={$.aboutTheCompany__chipInfo}>
        {ABOUT_THE_COMPANY_CHIP_INFO_DATA.map(
          ({ headerText, subHeaderText }, index) => {
            return (
              <div
                className={$.aboutTheCompany__chipInfoTexts}
                key={index}
              >
                <h1 className={$.aboutTheCompany__chipInfoHeaderText}>
                  {headerText}
                </h1>
                <span className={$.aboutTheCompany__chipInfoSubHeaderText}>
                  {subHeaderText}
                </span>
              </div>
            );
          },
        )}
      </div>
      <div className={$.aboutTheCompany__chipsIcon}>
        {ABOUT_THE_COMPANY_CHIP_ICON_DATA.map(
          ({ icon, headerText, subHeaderText }, index) => {
            return (
              <ServiceChip
                key={index}
                icon={icon}
                headerText={headerText}
                subHeaderText={subHeaderText}
              />
            );
          },
        )}
      </div>
    </div>
  );
};
