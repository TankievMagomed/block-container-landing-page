import React from "react";
import $ from "./../Modals.module.css";
import $$ from "./ModalPriceInquiry.module.css";
import { PhoneInput } from "../../Inputs";
import { MainButton } from "../../Buttons/MainButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./yupSchema";

export const ModalPriceInquiry = ({ onClose }) => {
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
      <div className={$$.modalPriceInquiry__header}>
        Получите сегодня решение,
        <br />
        стоимость и сроки
      </div>
      <div className={$$.modalPriceInquiry__subheader}>
        Наши эксперты помогут выбрать лучшее решение, проконсультируют по
        <br />
        условиям, рассчитают стоимость и сроки
      </div>
      <form
        className={$.modal__form}
        onSubmit={handleSubmit(handelSubmitForm)}
      >
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
          Получить решение, стоимость и сроки ⟶
        </MainButton>
        <span className={$$.modalPriceInquiry__consent}>
          Нажимая на кнопку, вы даете согласие на обработку персональных данных
          и соглашаетесь c политикой конфиденциальности
        </span>
      </form>
    </div>
  );
};
