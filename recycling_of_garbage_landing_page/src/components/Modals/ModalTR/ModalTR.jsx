import React from "react";
import $ from "./ModalTR.module.css";
import { MainInput, TextAreaInput, FileInput } from "../../Inputs";
import { MainButton } from "../../Buttons/MainButton";
import { useForm } from "react-hook-form";

export const ModalTR = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState,
  } = useForm();
  const handelSubmitForm = (event) => {
    event.preventDefault(); //Убирает дефолтное поведение
    console.log(event);
  };
  const email = watch('email');
  console.log('email', email);

  const telephone = watch('telephone');
  console.log('telephone', telephone);

  return (
    <div
      className={$.ModalToRContainer}
      style={{
        transition: "width 5s ease 100ms",
      }}
    >
      <div className={$.Header1Modal}>
        Получите решение в
        <br />
        течении 1 часа
      </div>
      <div className={$.Header2Modal}>
        Наши эксперты помогут выбрать лучшее решение,
        <br />
        проконсультируют по условиям, рассчитают сроки и стоимость
      </div>
      <form
        className={$.InputForms}
        onSubmit={handelSubmitForm}
      >
        <MainInput
          // value={telInput}
          // onFocus={() => {
          //   setTelInput('+_ (___) ___-__-__');
          // }}
          // onBlur={() => {
          //   setTelInput('');
          // }}
          // onChange={(e) => {
          // setTelInput(e)
          // }}
          className={$.InputForms1}
          placeholder={"Напишите номер телефона"}
          type={"tel"}
          {...register("telephone")}
        />
        <MainInput
          className={$.InputForms1}
          placeholder={"Электронная почта для коммуникации"}
          type={"email"}
          {...register("email")}
        />
        <TextAreaInput
          className={$.TextArea}
          placeholder={"Опишите техническое задание (необязательно)"}
          {...register("tz")}
        />
        <div className={$.LoadForms}>
          <span className={$.LoadSpan}>
            Загрузите техническое задание, если есть:
          </span>
          <FileInput {...register("fileTz")} />
        </div>
        <MainButton
          className={$.ButtonInputForms}
          type={"submit"}
        >
          Запросить предложение →
        </MainButton>
        <span className={$.SubmitSpan}>
          Нажимая на кнопку, вы даете согласие на обработку персональных данных
          и соглашаетесь c политикой конфиденциальности
        </span>
      </form>
    </div>
  );
};
