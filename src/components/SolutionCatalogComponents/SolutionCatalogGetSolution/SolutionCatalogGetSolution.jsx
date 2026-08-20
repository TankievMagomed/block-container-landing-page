import React, { useCallback } from "react";
import $ from "./SolutionCatalogGetSolution.module.css";
import Boss from "../../../assets/img/SolutionCatalog/BigBoss.png";
import { MainButton } from "components/Buttons";
import { ReactComponent as Paper } from "../../../assets/icon/paper.svg";
import { SOLUTION_CATALOG_CHECK_DATA } from "constants/SolutionCatalogCheckData";
import { ReactComponent as Check2 } from "../../../assets/icon/checked_2.svg";
import { PhoneInput } from "components/Inputs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./yupSchema";

export const SolutionCatalogGetSolution = () => {
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
    <div className={$.solutionCatalogGetSolution__section}>
      <h1 className={$.solutionCatalogGetSolution__headerText}>
        Узнайте сегодня стоимость и <br /> сроки под ключ
      </h1>
      <div className={$.solutionCatalogGetSolution__infoField}>
        <img
          src={Boss}
          alt="Boss"
        />
        <div className={$.solutionCatalogGetSolution__info}>
          <div className={$.solutionCatalogGetSolution__chip}>
            <Paper width={17} />
            <span>Комплект материалов для вашего проекта</span>
          </div>
          <h1 className={$.solutionCatalogGetSolution__infoHeaderText}>
            Получите коммерческое <br /> предложение за 1 час
          </h1>
          <span className={$.solutionCatalogGetSolution__infoSubHeaderText}>
            Наши эксперты свяжутся с вами в течении 15
            <br />
            минут для уточнения деталей
          </span>
          <div className={$.solutionCatalogGetSolution__checkItems}>
            {SOLUTION_CATALOG_CHECK_DATA.map(({ title }, index) => {
              return (
                <div
                  key={index}
                  className={$.solutionCatalogGetSolution__checkItem}
                >
                  <Check2
                    width={25}
                    height={25}
                  />
                  <span>{title}</span>
                </div>
              );
            })}
          </div>
          <form onSubmit={handleSubmitFormForReactHookForm}>
            <PhoneInput
              className={$.solutionCatalogGetSolution__input}
              placeholder={"Ваш телефон"}
              error={errors.telephone}
              errorMessage={"Обязательное поле"}
              {...register("telephone")}
              setValue={setValue}
              fieldName="telephone"
            />
            {Object.keys(errors).length > 0 && (
              <div className={$.solutionCatalogGetSolution__formError}>
                Пожалуйста, заполните все обязательные поля
              </div>
            )}
            <MainButton className={$.solutionCatalogGetSolution__button}>
              Получить решение
            </MainButton>
          </form>
          <span className={$.solutionCatalogGetSolution__email}>
            Или отправьте запрос на почту: pro@bk-resurs.ru
          </span>
        </div>
      </div>
    </div>
  );
};
