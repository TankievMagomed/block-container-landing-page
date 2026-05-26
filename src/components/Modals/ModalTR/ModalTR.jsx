import React, { useEffect, useRef } from "react";
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
    setValue,
    reset,
    formState: { errors },
    getValues,
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
        className={$.InputForms}
        onSubmit={handleSubmit(handelSubmitForm)}
      >
        <MainInput
          className={`${$.InputForms1} ${errors.telephone && $.modal__inputErrors}`}
          placeholder={"Напишите номер телефона"}
          type={"tel"}
          {...register("telephone")}
          onFocus={(event) => {
            event.target.style.caretColor = "transparent";
            const currentElement = event.target;

            if (!currentElement?.value) {
              setValue("telephone", "+7(___)___-__-__");
            }

            setTimeout(() => {
              const lustNumberIndex =
                currentElement?.value.search(/\d(?!.*\d)/);
              if (currentElement?.value[lustNumberIndex + 1] === "_") {
                currentElement?.setSelectionRange(
                  lustNumberIndex + 1,
                  lustNumberIndex + 1,
                );
              } else {
                currentElement?.setSelectionRange(
                  lustNumberIndex + 2,
                  lustNumberIndex + 2,
                );
              }
              currentElement.style.caretColor = "auto";
            }, 100);
          }}
          onBlur={(event) => {
            const value = event.target?.value;
            if (value === "+7(___)___-__-__") {
              setValue("telephone", "");
            }
          }}
          onChange={(event) => {
            event.target.style.caretColor = "transparent";
            const pattern = /\d+/g;
            const currentElement = event.target;
            const value = event.target.value;
            const numString = value.match(pattern);
            const resultSearch = numString?.join("");
            let replaceString = "+7(___)___-__-__";
            if (!resultSearch) {
              return setValue("telephone", replaceString);
            }
            for (let i = 1; i < resultSearch.length; i++) {
              replaceString = replaceString.replace(/_/, resultSearch[i]);
            }
            setValue("telephone", replaceString);

            setTimeout(() => {
              const lustNumberIndex = value.search(/\d(?!.*\d)/);

              if (value.length >= replaceString.length) {
                if (value[lustNumberIndex + 1] === "_") {
                  currentElement?.setSelectionRange(
                    lustNumberIndex + 1,
                    lustNumberIndex + 1,
                  );
                } else {
                  currentElement?.setSelectionRange(
                    lustNumberIndex + 2,
                    lustNumberIndex + 2,
                  );
                }
              } else {
                pattern.test(value[lustNumberIndex]);
                if (!pattern.test(value[lustNumberIndex])) {
                  currentElement?.setSelectionRange(
                    lustNumberIndex + 1,
                    lustNumberIndex + 1,
                  );
                }
              }
              currentElement.style.caretColor = "auto";
            }, 100);
          }}
          error={errors.telephone}
          errorMessage={'Обязательное поле'}
        />
        <MainInput
          className={`${$.InputForms1} ${errors.email && $.modal__inputErrors}`}
          placeholder={"Электронная почта для коммуникации"}
          type={"text"}
          {...register("email")}
          error={errors.email}
          errorMessage={'Укажите корректный email'}
        />
        <TextAreaInput
          className={`${$.TextArea} ${errors.tz && $.modal__inputErrors}`}
          placeholder={"Опишите техническое задание"}
          {...register("tz")}
          error={errors.tz}
          errorMessage={'Обязательное поле (минимум 5 символов)'}
        />
        <div className={$.modal__loadForm}>
          <span className={$.LoadSpan}>
            Загрузите техническое задание, если есть:
          </span>
          <FileInput {...register("fileTz")} />
        </div>
        {Object.keys(errors).length > 0 && (
          <div className={$.modal__formError}>
            Пожалуйста, заполните обязательные поля
          </div>
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
