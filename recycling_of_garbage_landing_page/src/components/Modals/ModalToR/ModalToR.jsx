import React from 'react';
import $ from './ModalTor.module.css';
import { MainInput, TextAreaInput, FileInput } from '../../Inputs';
import { MainButton } from '../../Buttons/MainButton';

export const ModalToR = () => {
  return (
    <div className={$.ModalToRContainer}>
      <div className={$.Header1Modal}>Получите решение в 
        <br/>
        течении 1 часа
    </div>
      <div className={$.Header2Modal}>Наши эксперты помогут выбрать лучшее решение, 
        <br/>
        проконсультируют по условиям, рассчитают сроки и стоимость
      </div>
      <form className={$.InputForms}>
        <MainInput className={$.InputForms1} placeholder={'Напишите номер телефона'} type={'tel'}/>
        <MainInput className={$.InputForms1} placeholder={'Электронная почта для коммуникации'} type={'email'}/>
        <TextAreaInput className={$.TextArea} placeholder={'Опишите техническое задание (необязательно)'}></TextAreaInput>
        <div className={$.LoadForms}>
          <span className={$.LoadSpan}>Загрузите техническое задание, если есть:</span>
          <FileInput/>
        </div>
          <MainButton className={$.ButtonInputForms} type={'submit'}>Запросить предложение →</MainButton>
          <span className={$.SubmitSpan}>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</span>
      </form>
      
    </div>
  )
}
