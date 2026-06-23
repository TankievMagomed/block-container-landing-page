import React from "react";
import { Header, Chip } from "../../components";
import $ from "./Main.module.css";
import { MainButton } from "../../components";
import { useDisclosure } from "@mantine/hooks";
import { Modal, FocusTrap } from "@mantine/core";
import { ModalPrice } from "../../components";
import { ReactComponent as Check } from "../../assets/icon/checked.svg";
import { ModalCloseButton } from "../../components";

export const Main = () => {
  const [isOpen, { open, close }] = useDisclosure(false);
  const handleCloseModal = () => close();
  return (
    <div className={$.main__section}>
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
      <Header />
      <div className={$.main__container}>
        <div className={$.main__subContainer}>
          <Chip>Работаем только с юр.лицами</Chip>
          <Chip>От производителя в Москве </Chip>
          <h1 className={$.main__containerText}>
            Производим{" "}
            <u>
              блок-
              <br />
              контейнеры и модульные
              <br />
              здания
            </u>{" "}
            под ваши требования
            <br />
            точно в срок под ключ
          </h1>
        </div>
        <div className={$.main__containerChips}>
          <div className={$.main__chip}>
            Подберем решение <br />и спроектирум
          </div>
          <div className={$.main__chip}>
            Произведем БК любой
            <br />
            сложности вовремя
          </div>
          <div className={$.main__chip}>
            Погрузим, доставим <br />и разгрузим
          </div>
          <div className={$.main__chip}>
            Монтаж на Вашем <br />
            участке от 1 дня
          </div>
          <div className={$.main__chip}>
            Срок службы до 15 лет <br />
            соответствие ГОСТ
          </div>
          <div className={$.main__chip}>
            10 лет на рынке, <br />
            доказанное качество!
          </div>
        </div>
        <div className={$.main__containerModal}>
          <MainButton
            className={$.main__button}
            onClickButton={() => {
              open();
            }}
          >
            Получить цену и сроки
          </MainButton>
          <MainButton
            className={$.main__button}
            type={"submit"}
          >
            Каталог типовых решений
          </MainButton>
        </div>
        <div className={$.main__textInfo}>
          <Check width={50} />
          <span>
            Ваш объект за 5-15 дней к полной
            <br />
            готовности под ключ, в Москве и МО
          </span>
        </div>
      </div>
    </div>
  );
};
