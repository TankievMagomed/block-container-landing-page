import React, { useCallback } from "react";
import $ from "./ReviewsGetSolution.module.css";
import Containers from "../../assets/img/Reviews/containers.png";
import { MainButton } from "components/Buttons";
import { ReactComponent as Paper } from "../../assets/icon/paper.svg";
import { PhoneInput } from "components/Inputs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./yupSchema";
import { TextAreaInput } from "components/Inputs";

export const ReviewsGetSolution = () => {
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

  const handelSubmitForm = useCallback(() => {
    reset();
  }, [reset]);
  const handleSubmitFormForReactHookForm = handleSubmit(handelSubmitForm);

  return (
    <div className={$.reviewsGetSolution__section}>
      <img
        src={Containers}
        alt="Containers"
      />
      <div className={$.reviewsGetSolution__info}>
        <div className={$.reviewsGetSolution__chip}>
          <Paper width={17} />
          <span>Комплект материалов для вашего проекта</span>
        </div>
        <h1 className={$.reviewsGetSolution__infoHeaderText}>
          Подберем лучшее решение для <br /> вашего проекта
        </h1>
        <span className={$.reviewsGetSolution__infoSubHeaderText}>
          Наши эксперты свяжутся с вами в течении 15
          <br />
          минут для уточнения деталей
        </span>
        <form
          className={$.reviewsGetSolution__inputInfo}
          onSubmit={handleSubmitFormForReactHookForm}
        >
          <TextAreaInput
            className={$.reviewsGetSolution__textArea}
            placeholder={"Как к вам обращаться?"}
            {...register("tz")}
            error={errors.tz}
            errorMessage={"Обязательное поле (минимум 2 символа)"}
          />
          <PhoneInput
            className={$.reviewsGetSolution__input}
            placeholder={"Ваш телефон"}
            error={errors.telephone}
            errorMessage={"Обязательное поле"}
            {...register("telephone")}
            setValue={setValue}
            fieldName="telephone"
          />
          <TextAreaInput
            className={$.reviewsGetSolution__textArea}
            placeholder={"Ваш комментарий"}
            {...register("tz")}
            error={errors.tz}
            errorMessage={"Обязательное поле (минимум 2 символа)"}
          />
          <MainButton
            className={$.reviewsGetSolution__button}
          >
            Получить решение
          </MainButton>
        </form>
        <span className={$.reviewsGetSolution__email}>
          Или отправьте запрос на почту: pro@bk-resurs.ru
        </span>
      </div>
    </div>
  );
};
