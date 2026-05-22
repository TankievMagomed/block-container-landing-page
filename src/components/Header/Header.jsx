import React from 'react';
import $ from './Header.module.css';
import Logo from "../../assets/icon/logo.png";
import { ReactComponent as Location } from "../../assets/icon/location.svg"
import { MainButton } from '../Buttons/MainButton';
import { useDisclosure } from '@mantine/hooks';
import { Modal, FocusTrap} from '@mantine/core';
import { ModalTR } from '../Modals';

export const Header = () => {
  const [isOpen, { open, close }] = useDisclosure(false);
  const handleCloseModal = () => close();
  return (
    <div className={$.headerContainer}>
      <Modal opened={true} onClose={close} size="auto" withCloseButton={false} centered padding={0} transitionProps={{transition: 'pop-bottom-left'}}>
        <FocusTrap.InitialFocus />
        <ModalTR onClose={ handleCloseModal} />
      </Modal>
      <div className={$.headerCompany}>
        <img src={Logo} alt="logo.png" />
        <span>
          производитель блок-контейнеров
          <br />
          и модульных зданий для юр. лиц
        </span>
      </div>
      <div className={$.headerAddress}>
        <Location width={17} />
        <span>
            АДРЕС:Г.ЛЮБЕРЦЫ, УЛ.
            <br/>
            КОТЕЛЬНИЧЕСКИЙ ПРОЕЗД 27А.
        </span>
      </div>
      <div className={$.headerContacts}>
        <span>+7 (499) 112-44-31
            <br/>
        pr@bk-resurs.ru
        </span>
        <MainButton onClickButton={() => {
          open();
        }}>Отправить ТЗ</MainButton>
      </div>
    </div>
  )
}

