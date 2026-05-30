import React from "react";
import $ from "./../Modal.module.css";
import $$ from "./ModalPrice.module.css";
import { MainInput, TextAreaInput, PhoneInput } from "../../Inputs";
import { MainButton } from "../../Buttons/MainButton";
import { Checkbox } from "../../Inputs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./yupSchema";

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
        <span className={$$.modalPrice__spanUnderline}>
          Работаем только с ю
        </span>
        р<span className={$$.modalPrice__spanUnderline}>.ли</span>ц
        <span className={$$.modalPrice__spanUnderline}>ами</span>
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
            <span className={$$.modalPrice__checkboxHeaderText}>Назначение модулей</span>
            <Checkbox title={"Административно бытовые комплексы"}/>
            <Checkbox title={"Прорабские и строительные"}/>
            <Checkbox title={"Штабы-строительства"}/>
            <Checkbox title={"КПП, посты охраны"}/>
            <Checkbox title={"Технические блоки"}/>
            <Checkbox title={"Сантехнические"}/>
            <Checkbox title={"Офисы продаж"}/>
            <Checkbox title={"Общежитие"}/>
            <Checkbox title={"Столовые"}/>
            <Checkbox title={"Свой вариант"}/>
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
          Запросить предложение →
        </MainButton>
        <span className={$.modal__consent}>
          Нажимая на кнопку, вы даете согласие на обработку персональных данных
          и соглашаетесь c политикой конфиденциальности
        </span>
      </form>
    </div>
  );
};
