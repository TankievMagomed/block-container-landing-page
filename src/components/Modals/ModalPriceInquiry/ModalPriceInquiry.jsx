import React, {useState} from "react";
import $ from "./../Modals.module.css";
import $$ from "./ModalPriceInquiry.module.css";
import { PhoneInput } from "../../Inputs";
import { MainButton } from "../../Buttons/MainButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./yupSchema";

export const ModalPriceInquiry = ({ onClose, headerText, subHeaderText, buttonText }) => {
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
