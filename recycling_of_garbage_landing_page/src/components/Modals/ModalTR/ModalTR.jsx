import React from "react";
import $ from "./ModalTR.module.css";
import { MainInput, TextAreaInput, FileInput } from "../../Inputs";
import { MainButton } from "../../Buttons/MainButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./yupSchema";

export const ModalTR = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState,
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
  const email = watch("email");

  const telephone = watch("telephone");
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
          className={`${$.InputForms1} ${formState.errors.telephone && $.InputErrors}`}
          placeholder={"Напишите номер телефона"}
          type={"tel"}
          {...register("telephone")}
          onFocus={() => {
            setValue("telephone", "+7(___)___-__-__");
          }}
          onBlur={() => {
            if(telephone === "+7(___)___-__-__"){
              setValue("telephone", "");
            }
          }}
          onChange={(event) => {
            const pattern = /\d+/gm;
            const numString = event.target.value.match(pattern);
            const resultSearch = numString?.join('');
            let replaceString = "+7(___)___-__-__";
            for (let i = 1; i < resultSearch.length; i++) {
              replaceString = replaceString.replace(/_/, resultSearch[i]);
            }
            setValue('telephone', replaceString);
          }}
        />
        {formState.errors.telephone?.message && (
          <span className={$.ErrorInput}>Обязательное поле</span>
        )}
        <MainInput
          className={`${$.InputForms1} ${formState.errors.email && $.InputErrors}`}
          placeholder={"Электронная почта для коммуникации"}
          type={"text"}
          {...register("email")}
        />
        {formState.errors.email?.message && (
          <span className={$.ErrorInput}>Укажите корректный email</span>
        )}
        <TextAreaInput
          className={`${$.TextArea} ${formState.errors.tz && $.InputErrors}`}
          placeholder={"Опишите техническое задание"}
          {...register("tz")}
        />
        {formState.errors.tz?.message && <span className={$.ErrorInput}>Обязательное поле (минимум 5 символов)</span>}
        <div className={$.LoadForms}>
          <span className={$.LoadSpan}>
            Загрузите техническое задание, если есть:
          </span>
          <FileInput {...register("fileTz")} />
        </div>
        {Object.keys(formState.errors).length > 0 && (
          <MainButton className={$.ErrorFiled} type={"button"}>
            Пожалуйста, заполните обязательные поля
          </MainButton>
        )}
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
