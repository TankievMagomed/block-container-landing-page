import React from "react";
import $ from "./SolutionCatalogAddInformation.module.css";
import Box from "../../../assets/img/SolutionCatalog/10.webp";
import { useDisclosure } from "@mantine/hooks";
import { Modal, FocusTrap } from "@mantine/core";
import { ModalSolutionCatalogAddInformation } from "components/Modals/ModalSolutionCatalogAddInformation/ModalSolutionCatalogAddInformation";
import { MainButton } from "components/Buttons";
import { ModalCloseButton } from "components/Buttons";

export const SolutionCatalogAddInformation = () => {
  const [isOpen, { open, close }] = useDisclosure(false);
  const handleCloseModal = () => close();
  return (
    <div className={$.solutionCatalogAddInformation__section}>
      <Modal
        opened={isOpen}
        onClose={close}
        size="auto"
        withCloseButton={false}
        centered
        padding={0}
        transitionProps={{ transition: "pop-bottom-left" }}
      >
        <FocusTrap.InitialFocus />
        <ModalSolutionCatalogAddInformation onClose={handleCloseModal} />
      </Modal>
        {isOpen && <ModalCloseButton onClickButton={close} />}
      <img
        src={Box}
        alt="Box"
      />
      <div className={$.solutionCatalogAddInformation__info}>
        <h1 className={$.solutionCatalogAddInformation__infoHeaderText}>
          Не нашли блок-контейнеры <br /> под свои задачи?
        </h1>
        <span className={$.solutionCatalogAddInformation__infoSubHeaderText}>
          Оставьте заявку и мы разработаем уникальный блок-
          <br />
          контейнер конкретно под Ваши нужды и цели
        </span>
        <MainButton
          className={$.solutionCatalogAddInformation__button}
          onClickButton={() => {
            open();
          }}
        >
          Получить решение
        </MainButton>
      </div>
    </div>
  );
};
