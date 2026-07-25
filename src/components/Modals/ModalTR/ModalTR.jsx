import React from "react";
import $ from "./../Modals.module.css";
import { MainInput, TextAreaInput, FileInput, PhoneInput } from "../../Inputs";
import { MainButton } from "../../Buttons/MainButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./yupSchema";

export const ModalTR = ({ onClose }) => {
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
      <div className={$.modal__header}>
        Получите решение в
        <br />
        течении 1 часа
      </div>
      <div className={$.modal__subheader}>
        Наши эксперты помогут выбрать лучшее решение,
        <br />
        проконсультируют по условиям, рассчитают сроки и стоимость
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
        <MainInput
          className={$.modal__input}
          placeholder={"Электронная почта для коммуникации"}
          type={"text"}
          {...register("email")}
          error={errors.email}
          errorMessage={"Укажите корректный email"}
        />
        <TextAreaInput
          className={$.modal__textarea}
          placeholder={"Опишите техническое задание"}
          {...register("tz")}
          error={errors.tz}
          errorMessage={"Обязательное поле (минимум 5 символов)"}
        />
        <div className={$.modal__loadForm}>
          <span className={$.modal__fileLabel}>
            Загрузите техническое задание, если есть:
          </span>
          <FileInput
            placeholder={"Загрузите файлы"}
            {...register("fileTz")}
          />
        </div>
        {Object.keys(errors).length > 0 && (
          <div className={$.modal__formError}>
            Пожалуйста, заполните все обязательные поля
          </div>
        )}
        <MainButton
          className={$.modal__submitButton}
          type={"submit"}
        >
          Запросить предложение ⟶
        </MainButton>
        <span className={$.modal__consent}>
          Нажимая на кнопку, вы даете согласие на обработку персональных данных
          и соглашаетесь c политикой конфиденциальности
        </span>
      </form>
    </div>
  );
};
