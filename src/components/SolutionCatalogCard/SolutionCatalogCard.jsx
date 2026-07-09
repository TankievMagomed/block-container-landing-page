import React, { useState } from "react";
import $ from "./SolutionCatalogCard.module.css";
import { FullImage } from "components/FullImage";
import { SOLUTION_CATALOG_DATA } from "constants";
import { MainButton } from "../Buttons/MainButton";
import { useDisclosure } from "@mantine/hooks";
import { Modal, FocusTrap } from "@mantine/core";
import { ModalCloseButton } from "components/Buttons";
import { ModalPriceInquiry } from "../Modals/ModalPriceInquiry/ModalPriceInquiry";
import { InfoButton } from "components/Buttons/InfoButton/InfoButton";
import { ModalCertificates } from "components/Modals/ModalCertificates/ModalCertificates";

export const SolutionCatalogCard = ({ title, photos, index, ...rest }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [isOpenPrice, { open: openPrice, close: closePrice }] =
    useDisclosure(false);
  const [isOpenModalInfo, { open: openModalInfo, close: closeModalInfo }] =
    useDisclosure(false);
  const handleCloseModal = () => closePrice();
  return (
    <div className={$.solutionCatalogCard}>
      <Modal
        opened={isOpenPrice}
        onClose={closePrice}
        size="auto"
        withCloseButton={false}
        centered
        padding={0}
        transitionProps={{ transition: "pop-bottom-left" }}
      >
        <FocusTrap.InitialFocus />
        <ModalPriceInquiry onClose={handleCloseModal} />
      </Modal>
      {isOpenPrice && <ModalCloseButton onClickButton={closePrice} />}
      <Modal
        fullScreen
        opened={isOpenModalInfo}
        onClose={closeModalInfo}
        size="auto"
        withCloseButton={false}
        centered
        padding={0}
        transitionProps={{ transition: "pop-bottom-left" }}
        styles={{ body: { backgroundColor: "rgb(238, 233, 233)", padding: 0 } }}
      >
        <FocusTrap.InitialFocus />
        <ModalCertificates onClose={handleCloseModal} />
      </Modal>
      {isOpenModalInfo && (
        <ModalCloseButton
          onClickButton={closeModalInfo}
          color={"#000"}
        />
      )}
      <div className={$.solutionCatalogCard__photoBox}>
        <img
          className={$.solutionCatalogCard__photoBoxImg}
          onClick={() => setSelectedPhotoIndex(index)}
          src={photos[0]}
          alt={title}
        />
        <span className={$.solutionCatalogCard__photoBoxSpan}>
          НАШ ПРИМЕР ПРОЕКТА
        </span>
      </div>
      <div className={$.solutionCatalogCard__textBox}>
        <span className={$.solutionCatalogCard__textTitle}>{title}</span>
        <span className={$.solutionCatalogCard__textInfo}>
          Подберем решение под ваши <br /> требования, дадим цены и сроки
        </span>
        <div className={$.solutionCatalogCard__textBoxModals}>
          <MainButton
            onClickButton={() => {
              openPrice();
            }}
          >
            Узнать стоимость
          </MainButton>
          <InfoButton
            onClickButton={() => {
              openModalInfo();
            }}
          />
        </div>
      </div>
      {selectedPhotoIndex !== null && (
        <FullImage
          photos={SOLUTION_CATALOG_DATA.map(({ photos }) => photos[0])}
          initialIndex={selectedPhotoIndex}
          onClose={() => setSelectedPhotoIndex(null)}
          modalCloseButtonColor={"#000"}
        />
      )}
    </div>
  );
};
