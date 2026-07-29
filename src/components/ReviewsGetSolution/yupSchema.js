import * as yup from "yup";

export const schema = yup
  .object({
    telephone: yup
      .string()
      .matches(/^\+[0-9()-]+$/, "Введите корректный номер телефона")
      .min(15, "Длина должна быть 11 символов")
      .max(16, "Длина должна быть 11 символов"),

    tz: yup.string().required("Поле обязательно для заполения").min(2),
  })
  .required();
