import React from "react";
import $ from "./Functionality.module.css";
import { FUNCTIONALITY_OPTIONS_DATA } from "constants";
import { FunctionalityInfoChip } from "components";
import { MainButton } from "../../components";
import { useDisclosure } from "@mantine/hooks";
import { Modal, FocusTrap } from "@mantine/core";
import { ModalPrice } from "../../components";
import { ModalCloseButton } from "../../components";
import { FunctionalityCard } from "components/FunctionalityCard/FunctionalityCard";
import { FUNCTIONALITY_CARD_DATA } from "./../../constants/FunctionalityCardData";
import { FunctionalityGetSolution } from "components/FunctionalityGetSolution";

export const Functionality = () => {
  const [isOpen, { open, close }] = useDisclosure(false);
  const handleCloseModal = () => close();
  return (
    <div className={$.functionality__section} id='functionality'>
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
        <ModalPrice onClose={handleCloseModal} />
      </Modal>
      {isOpen && <ModalCloseButton onClickButton={close} />}
      <h1 className={$.functionality__headerText}>
        Варианты планировок, внутреннего <br /> снабжения и отделки
      </h1>
      <span className={$.functionality__subHeaderText}>
        Обеспечим блок-контейнеры и модульные здания всем
        <br /> необходимым под ключ!
      </span>
      <div className={$.functionality__chipsSection}>
        {FUNCTIONALITY_OPTIONS_DATA.map(
          ({ headerText, subHeaderText, photo, infoText }, index) => {
            return (
              <FunctionalityInfoChip
                headerText={headerText}
                subHeaderText={subHeaderText}
                photo={photo}
                infoText={infoText}
                index={index}
              />
            );
          },
        )}
      </div>
      <div className={$.functionality__containerModal}>
        <MainButton
          className={$.functionality__button}
          onClickButton={() => {
            open();
          }}
        >
          Получить решение под ключ
        </MainButton>
      </div>
      <div className={$.functionality__principlesColor}>
        <div className={$.functionality__principles}>
          <h1 className={$.functionality__principlesHeaderText}>
            Улучшенная конструкция блок-контейнеров, <br /> благодаря чему
            прослужат 2 раза дольше
          </h1>
          <div className={$.functionality__principlesCards}>
            {FUNCTIONALITY_CARD_DATA.map(
              ({ icon, headerText, subHeaderText }) => {
                return (
                  <FunctionalityCard
                    icon={icon}
                    headerText={headerText}
                    subHeaderText={subHeaderText}
                  />
                );
              },
            )}
          </div>
      <FunctionalityGetSolution/>
        </div>
      </div>
    </div>
  );
};
