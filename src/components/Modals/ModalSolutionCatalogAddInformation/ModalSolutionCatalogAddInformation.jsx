import React, {useState} from "react";
import $ from "./../Modals.module.css";
import $$ from "./ModalSolutionCatalogAddInformation.module.css";
import { PhoneInput } from "../../Inputs";
import { TextAreaInput } from "../../Inputs";
import { MainButton } from "../../Buttons/MainButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./yupSchema";

export const ModalSolutionCatalogAddInformation = ({ onClose }) => {
   const [isSendError, setIsSendError] = useState(false);
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

  const handelSubmitForm = async (data) => {
    try {
      const response = await fetch("http://localhost:4000/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Ошибка сервера");
      } else {
        reset();
        onClose();
        setIsSendError(false);
      }
    } catch (error) {
      setIsSendError(true);
    }
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
        {Object.keys(errors).length > 0 && (
          <div className={$.modal__formError}>
            Пожалуйста, заполните все обязательные поля
          </div>
        )}
        {isSendError && (
          <div className={$.modal__formError}>
            Ошибка сервера, попробуйте отправить еще раз
          </div>
        )}
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
