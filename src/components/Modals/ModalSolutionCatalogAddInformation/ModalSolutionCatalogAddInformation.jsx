import React from "react";
import $ from "./../Modals.module.css";
import $$ from "./ModalSolutionCatalogAddInformation.module.css";
import { PhoneInput } from "../../Inputs";
import { TextAreaInput } from "../../Inputs";
import { MainButton } from "../../Buttons/MainButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./yupSchema";

export const ModalSolutionCatalogAddInformation = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      telephone: "",
    },
    resolver: yupResolver(schema),
  });

  const handelSubmitForm = (data) => {
    reset();
    onClose();
  };

  return (
    <div
      className={$.modal__container}
      style={{
        transition: "width 5s ease 100ms",
      }}
    >
      <div className={$$.modalSolutionCatalogAddInformation__header}>
        Получите решение, стоимость и
        <br />
        сроки за 1 час
      </div>
      <div className={$$.modalSolutionCatalogAddInformation__subheader}>
        Наши эксперты помогут выбрать лучшее решение, проконсультируют по
        <br />
        условиям, рассчитают сроки и стоимость
      </div>
      <form
        className={$$.modalSolutionCatalogAddInformation__form}
        onSubmit={handleSubmit(handelSubmitForm)}
      >
        <TextAreaInput
          className={$$.modalSolutionCatalogAddInformation__textarea}
          placeholder={"Ваше имя"}
          {...register("tz")}
          error={errors.tz}
          errorMessage={"Обязательное поле (минимум 2 символа)"}
        />
        <PhoneInput
          className={$.modal__input}
          placeholder={"Напишите номер телефона"}
          error={errors.telephone}
          errorMessage={"Обязательное поле"}
          {...register("telephone")}
          setValue={setValue}
          fieldName="telephone"
        />
        <MainButton
          className={$.modal__submitButton}
          type={"submit"}
        >
          ✓ Получить решение
        </MainButton>
        <span className={$$.modalSolutionCatalogAddInformation__consent}>
          Нажимая на кнопку, вы даете согласие на обработку персональных данных
          и соглашаетесь c политикой конфиденциальности
        </span>
      </form>
    </div>
  );
};
