import React from "react";
import $ from "./AdditionalServices.module.css";
import ContainerImage from "../../assets/img/AdditionalServices/1.jpg";
import { MainButton } from "components/Buttons";
import { Modal, FocusTrap } from "@mantine/core";
import { AdditionalServicesCard } from "components";
import { ModalCloseButton } from "components/Buttons";
import { ADDITIONAL_SERVICES_CARD_DATA } from "constants";
import { useDisclosure } from "@mantine/hooks";
import { ModalPriceInquiry } from "components";

export const AdditionalServices = () => {
  const [isOpen, { open, close }] = useDisclosure(false);
  const handleCloseModal = () => close();

  return (
    <div className={$.additionalServices__section} id='additionalServices'>
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
        <ModalPriceInquiry
          onClose={handleCloseModal}
          headerText={`Получите консультацию`}
          subHeaderText={`Наши эксперты помогут выбрать лучшее решение, проконсультируют по \nусловиям, рассчитают предварительные сроки и стоймость`}
          buttonText={`Получить консультацию ⟶`}
        />
      </Modal>
      {isOpen && <ModalCloseButton onClickButton={close} />}
      <div className={$.additionalServices__info}>
        <div className={$.additionalServices__chip}>
          <span>Дополнительные услуги</span>
        </div>
        <h1 className={$.additionalServices__infoHeaderText}>
          Выполняем полный цикл <br /> работ — под ключ
        </h1>
        <span className={$.additionalServices__infoSubHeaderText}>
          Вы получите экспертную консультационную поддержку на всех
          <br />
          этапах нашего сотрудничества
        </span>
        <div className={$.additionalServices__principlesCards}>
          {ADDITIONAL_SERVICES_CARD_DATA.map(
            ({ icon, headerText, subHeaderText }) => {
              return (
                <AdditionalServicesCard
                  icon={icon}
                  headerText={headerText}
                  subHeaderText={subHeaderText}
                />
              );
            },
          )}
        </div>
        <MainButton
          className={$.additionalServices__button}
          onClickButton={() => {
            open();
          }}
        >
          Получить консультацию
        </MainButton>
      </div>
      <img
        src={ContainerImage}
        alt="ContainerImage"
      />
    </div>
  );
};
