import React from "react";
import $ from './FunctionalityGetSolution.module.css';
import PriceList from "../../assets/img/Functionality/price_list.png";
import { MainButton } from "components/Buttons";
import { ReactComponent as Paper } from "../../assets/icon/paper.svg";
import { SOLUTION_CATALOG_CHECK_DATA } from "constants/SolutionCatalogCheckData";
import { ReactComponent as Check2 } from "../../assets/icon/checked_2.svg";
import { useDisclosure } from "@mantine/hooks";
import { Modal, FocusTrap } from "@mantine/core";
import { ModalTR } from "../Modals";
import { ModalCloseButton } from "components/Buttons";

export const FunctionalityGetSolution = () => {
  const [isOpen, { open, close }] = useDisclosure(false);
   const handleCloseModal = () => close();

  return (
    <div className={$.functionalityGetSolution__section}>
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
              <ModalTR onClose={handleCloseModal} />
            </Modal>
            {isOpen && <ModalCloseButton onClickButton={close} />}
      <img
        src={PriceList}
        alt="PriceList"
      />
      <div className={$.functionalityGetSolution__info}>
        <div className={$.functionalityGetSolution__chip}>
          <Paper width={17} />
          <span>Комплект материалов для вашего проекта</span>
        </div>
        <h1 className={$.functionalityGetSolution__infoHeaderText}>
          У вас же есть готовое <br /> техническое задание?
        </h1>
        <span className={$.functionalityGetSolution__infoSubHeaderText}>
          Отправьте его нам и получите в
          <br />
          течении 1 часа точную стоимость
        </span>
        <div className={$.functionalityGetSolution__checkItems}>
          {SOLUTION_CATALOG_CHECK_DATA.map(({ title }, index) => {
            return (
              <div
                key={index}
                className={$.functionalityGetSolution__checkItem}
              >
                <Check2
                  width={25}
                  height={25}
                />
                <span>{title}</span>
              </div>
            );
          })}
        </div>
          <MainButton
            className={$.functionalityGetSolution__button}
            onClickButton={() => {
            open();
          }}
          >
            Получить стоимость и сроки
          </MainButton>
        <span className={$.functionalityGetSolution__email}>
          Или отправьте запрос на почту: pro@bk-resurs.ru
        </span>
      </div>
    </div>
  );
};
