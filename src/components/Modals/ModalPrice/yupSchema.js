import * as yup from "yup";

export const schema = yup
  .object({
    telephone: yup
      .string()
      .matches(/^\+[0-9()-]+$/, "Введите корректный номер телефона")
      .min(15, "Длина должна быть 11 символов")
      .max(16, "Длина должна быть 11 символов"),

    email: yup
      .string()
      .required("Email обязателен")
      .email("Введите корректный email"),

    tz: yup.string().required("Поле обязательно для заполения").min(5),
    modules: yup.array().min(1, "Поле обязательно для заполения"),
    customOption: yup.string().when("modules", {
      is: (modules) => modules?.includes("custom"),
      then: (schema) =>
        schema.required("Поле обязательно для заполения").min(1),
      otherwise: (schema) => schema.notRequired(),
    }),
  })
  .required();
