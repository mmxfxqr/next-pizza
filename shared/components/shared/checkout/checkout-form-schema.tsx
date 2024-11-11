import {z} from "zod";
export const checkoutFormSchema = z.object({
    firstName: z.string().min(2, "Имя должно содержать не менее 2-х символов"),
    lastName: z.string().min(2, "Фамилия должна содержать не менее 2-х символов"),
    email: z.string().email("Введите конкретную почту"),
    phone: z.string().min(10, "Введите конкретный номер телефона"),
    address: z.string().min(5, "Введите конкретный адрес доставки"),
    comment: z.string().optional(),
})
export type TCheckoutFormFields = z.infer<typeof checkoutFormSchema>