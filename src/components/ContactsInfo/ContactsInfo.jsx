import React from "react";
import $ from "./ContactsInfo.module.css";
import { MainButton } from "../Buttons/MainButton";
import { useDisclosure } from "@mantine/hooks";
import { Modal, FocusTrap } from "@mantine/core";
import { ModalTR } from "../Modals";
import { ModalCloseButton } from "components/Buttons";
import { CONTACTS_DATA } from "constants";

export const ContactsInfo = () => {
  const [isOpen, { open, close }] = useDisclosure(false);
  const handleCloseModal = () => close();
  return (
    <div className={$.contactsInfo__section}>
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
      <div className={$.contactsInfo__textsField}>
        <h1 className={$.contactsInfo__textsFieldHeader}>Бк-Ресурс</h1>
        <span className={$.contactsInfo__textsFieldSubHeader}>
          Производство, доставка и монтаж, <br /> блок‐контейнеров, технических{" "}
          <br /> контейнеров и модульных зданий по <br /> всей России
        </span>
        <span className={$.contactsInfo__textsFieldSmall}>
          © Все права защищены БК‐Ресурс, 2006
        </span>
      </div>
      <div className={$.contactsInfo__textsField}>
        <h1 className={$.contactsInfo__textsFieldHeader}>Контакты</h1>
        <span className={$.contactsInfo__textsFieldSubHeader}>
          Остались вопросы или нужна <br /> дополнительная информация?
        </span>
        <span className={$.contactsInfo__textsFieldSubHeaderBoldType}>
          +7 (499) 112-44-31 <br /> pr@bk-resurs.ru <br /> <br /> <br /> <br />{" "}
          <br /> Адрес офиса и производства:
        </span>
        <span className={$.contactsInfo__textsFieldSubHeader}>
          г. Люберцы, ул. Котельнический проезд <br /> 27А. <br /> <br /> На
          связи пн-пт с 09:00 до 18:00. <br /> Производство работает без
          выходных
        </span>
        <span className={$.contactsInfo__textsFieldSmall}>
          Пользовательское соглашение
        </span>
      </div>
      <div className={$.contactsInfo__textsField}>
        <h1 className={$.contactsInfo__textsFieldHeader}>Реквизиты</h1>
        <span className={$.contactsInfo__textsFieldSubHeader}>
          Учредительные документы БК-РЕСУРС <br /> для договора и оплаты
        </span>
        <span className={$.contactsInfo__textsFieldSubHeaderBoldType}>
          ОГРН: 1175007004072 <br /> ИНН: 5042144356 <br /> <br />
        </span>
        <a
          className={$.contactsInfo__button}
          href={CONTACTS_DATA}
          target="_blank"
          rel="noopener noreferrer"
        >
          Карточка предприятия ⟶
        </a>
        <MainButton
          className={$.contactsInfo__modalButton}
          onClickButton={() => {
            open();
          }}
        >
          Отправить ТЗ
        </MainButton>
        <span className={$.contactsInfo__textsFieldSmall}>
          Политика конфиденциальности
        </span>
      </div>
    </div>
  );
};
