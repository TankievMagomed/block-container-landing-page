import React, { useState, useEffect } from "react";
import $ from "./../Modals.module.css";
import $$ from "./ModalPrice.module.css";
import { MainInput, TextAreaInput, PhoneInput } from "../../Inputs";
import { MainButton } from "../../Buttons/MainButton";
import { Checkbox } from "../../Inputs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./yupSchema";
import { MODAL_PRICE_DATA } from "../../../constants";

export const ModalPrice = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      telephone: "",
      modules: [],
    },
    resolver: yupResolver(schema),
  });

  const handelSubmitForm = (data) => {
    reset();
    onClose();
  };
  const [checkbox, setCheckbox] = useState(false);

  const registerCustomModule = register("modules");

  return (
    <div
      className={$.modal__container}
      style={{
        transition: "width 5s ease 100ms",
      }}
    >
      <div className={$.modal__header}>
        Получите решение,
        <br />
        стоимость и сроки за 1 час
      </div>
      <div className={$.modal__subheader}>
        Наши эксперты помогут выбрать лучшее решение,
        <br />
        проконсультируют по условиям, рассчитают сроки и стоимость
      </div>
      <div className={$$.modalPrice__attention}>
        <u>Работаем только с юр.лицами</u>
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
        <div className={$$.modalPrice__checkbox}>
          <span className={$$.modalPrice__checkboxHeaderText}>
            Назначение модулей
          </span>
          <div className={$$.modalPrice__checkboxList}>
            {MODAL_PRICE_DATA.map(({ title }) => {
              return (
                <Checkbox
                  {...register("modules")}
                  value={title}
                  key={title}
                  title={title}
                />
              );
            })}
            <div className={$$.modalPrice__checkboxCustomOption}>
              <Checkbox
                {...registerCustomModule}
                onChange={(event) => {
                  registerCustomModule.onChange(event);
                  setCheckbox((prev) => !prev);
                }}
                title={"Свой вариант"}
              />
              {checkbox && (
                <MainInput
                  className={$$.modalPrice__customInput}
                  {...register("customOption")}
                  error={errors.customOption}
                  errorMessage={"Обязательное поле (минимум 1 символ)"}
                  type={"text"}
                />
              )}
            </div>
          </div>
          {/* Застилизовать */}
          {!!errors.modules && <span>{errors.modules.message}</span>}
        </div>
        <TextAreaInput
          className={$.modal__textarea}
          placeholder={"Опишите техническое задание"}
          {...register("tz")}
          error={errors.tz}
          errorMessage={"Обязательное поле (минимум 5 символов)"}
        />
        {Object.keys(errors).length > 0 && (
          <div className={$.modal__formError}>
            Пожалуйста, заполните обязательные поля
          </div>
        )}
        <MainButton
          className={$.modal__submitButton}
          type={"submit"}
        >
          Рассчитать стоимость →
        </MainButton>
        <span className={$.modal__consent}>
          Нажимая на кнопку, вы даете согласие на обработку персональных данных
          и соглашаетесь c политикой конфиденциальности
        </span>
      </form>
    </div>
  );
};
