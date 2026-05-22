import React from "react";
import $ from "./ModalTR.module.css";
import { MainInput, TextAreaInput, FileInput } from "../../Inputs";
import { MainButton } from "../../Buttons/MainButton";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "./yupSchema";

export const ModalTR = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      telephone: "+_ (___) ___-__-__",
    },
    resolver: yupResolver(schema)
  });
  const handelSubmitForm = (data) => {
    console.log(data);
  };
  const email = watch("email");

  const telephone = watch("telephone");
  console.log(errors);
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
        onSubmit={handleSubmit(handelSubmitForm)}
      >
        <MainInput
          className={`${$.InputForms1} ${errors.telephone && $.TelephoneInputErrors}`}
          placeholder={"Напишите номер телефона"}
          type={"tel"}
          {...register("telephone")}
        />
         {errors.telephone?.type==='matches' && <span>Это поле обязательно</span>}
        <MainInput
          className={$.InputForms1}
          placeholder={"Электронная почта для коммуникации"}
          type={"email"}
          {...register("email")}
        />
        <TextAreaInput
          className={$.TextArea}
          placeholder={"Опишите техническое задание"}
          {...register("tz")}
        />
        {errors.tz?.type==='required' && <span>Это поле обязательно</span>}
        {errors.tz?.type==='minLength' && <span>Минимальная длина 5 символов</span>}
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
