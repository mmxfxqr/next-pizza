import { z } from "zod";
export const passwordSchema = z
  .string()
  .min(6, { message: "Пароль должен содержать не менее 6 символов" });
  export const passwordSchemaForEditProfile = z
  .string()
  .refine((val) => val === "" || val.length >= 6, {
    message: "Пароль должен содержать не менее 6 символов",
  })
  .optional();
export const formLoginSchema = z.object({
  email: z.string().email({ message: "Введите корректную почту" }),
  password: passwordSchema,
});
export const formRegisterSchema = formLoginSchema
  .merge(
    z.object({
      fullName: z.string().min(2, { message: "Введите корректное имя" }),
      confirmPassword: passwordSchema,
    })
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });
  export const formEditProfileSchema = z
  .object({
    email: z.string().email({ message: "Введите корректную почту" }),
    fullName: z.string().min(2, { message: "Введите корректное имя" }),
    password: passwordSchemaForEditProfile, // Пароль опционален
    confirmPassword: passwordSchemaForEditProfile.optional(), // Подтверждение пароля опционально
  })
  .refine(
    (data) => {
      // Проверяем совпадение паролей только если оба поля заполнены
      return data.password === data.confirmPassword || !data.password;
    },
    {
      message: "Пароли не совпадают",
      path: ["confirmPassword"],
    }
  );
export type FormRegisterSchema = z.infer<typeof formRegisterSchema>;
export type FormLoginSchema = z.infer<typeof formLoginSchema>;
export type FormEditProfileSchema = z.infer<typeof formEditProfileSchema>;
