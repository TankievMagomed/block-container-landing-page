import React from "react";
import $ from "./CompletedProjects.module.css";
import AlfaGroup from "../../assets/icon/Clients/AlfaGroup.webp";
import AviaGroup from "../../assets/icon/Clients/AviaGroup.webp";
import Mobil from "../../assets/icon/Clients/Mobil.webp";
import Pic from "../../assets/icon/Clients/Pic.webp";
import { ReactComponent as Samolet } from "../../assets/icon/Clients/samolet.svg";
import Smart from "../../assets/icon/Clients/smart.webp";
import { ProjectCarousel } from "components/ProjectCarousel/ProjectCarousel";
import { COMPLETED_PROJECTS_DATA } from "constants";
import { Modal, FocusTrap } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ModalReviews } from "components/Modals/ModalReviews/ModalReviews";
import { MainButton } from "../../components";

export const CompletedProjects = () => {
  const [isOpen, { open, close }] = useDisclosure(false);
  const handleCloseModal = () => close();
  return (
    <div className={$.completedProjects__section}>
      <Modal
        fullScreen
        opened={isOpen}
        onClose={close}
        size="auto"
        withCloseButton={false}
        centered
        padding={0}
        transitionProps={{ transition: "pop-bottom-left" }}
        styles={{ body: { backgroundColor: 'rgb(238, 233, 233)', padding: 0 } }}
      >
        <FocusTrap.InitialFocus />
        <ModalReviews handleCloseModal={handleCloseModal} />
      </Modal>
      <h1 className={$.completedProjects__headerText}>
        Нам доверили реализацию своих проектов
        <br />
        уже более 1250 компаний по всей России
      </h1>
      <span className={$.completedProjects__subHeaderText}>
        Все проекты выполняются четко по требованию заказчика,
        <br />
        учитывая спецификацию, сроки и бюджет
      </span>
      <div className={$.completedProjects_logoSection}>
        <img
          src={Pic}
          alt="Pic"
        />
        <img
          src={AviaGroup}
          alt="AviaGroup"
        />
        <Samolet />
        <img
          src={Smart}
          alt="Smart"
        />
        <img
          src={AlfaGroup}
          alt="AlfaGroup"
        />
        <img
          src={Mobil}
          alt="Mobil"
        />
      </div>
      <div className={$.completedProjects__photoProjects}>
        {COMPLETED_PROJECTS_DATA.map(({ title, photos }) => {
          return (
            <ProjectCarousel
              title={title}
              photos={photos}
              key={title}
            />
          );
        })}
      </div>
      <div className={$.completedProjects__buttonField}>
        <MainButton
          className={$.completedProjects__buttonReviews}
          type={"submit"}
          onClickButton={() => {
            open();
          }}
        >
          Смотреть рекомендательные письма
        </MainButton>
      </div>
    </div>
  );
};
