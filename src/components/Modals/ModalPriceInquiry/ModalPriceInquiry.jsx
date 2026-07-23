import React from "react";
import $ from "./../Modals.module.css";
import $$ from "./ModalPriceInquiry.module.css";
import { PhoneInput } from "../../Inputs";
import { MainButton } from "../../Buttons/MainButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./yupSchema";

export const ModalPriceInquiry = ({ onClose, headerText, subHeaderText, buttonText }) => {
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
        {headerText}
      </div>
      <div className={$$.modalPriceInquiry__subheader}>
         {subHeaderText}
      </div>
      <form
        className={$$.modalPriceInquiry__form}
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
          {buttonText}
        </MainButton>
        <span className={$$.modalPriceInquiry__consent}>
          Нажимая на кнопку, вы даете согласие на обработку персональных данных
          и соглашаетесь c политикой конфиденциальности
        </span>
      </form>
    </div>
  );
};
