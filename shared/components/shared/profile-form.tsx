"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  formEditProfileSchema,
  FormEditProfileSchema,
  FormRegisterSchema,
  formRegisterSchema,
} from "./modals/auth-modal/forms/schemas";
import { User } from "@prisma/client";
import toast from "react-hot-toast";
import { signOut } from "next-auth/react";
import { Container } from "./container";
import { Title } from "./title";
import { Button } from "../ui";
import { FormInput } from "./form";
import { updateUserInfo } from "@/app/actions";
import Cookies from "js-cookie";

interface Props {
  data: User;
}

export const ProfileForm: React.FC<Props> = ({ data }) => {
  const form = useForm({
    resolver: zodResolver(formEditProfileSchema),
    defaultValues: {
      fullName: data.fullName,
      email: data.email,
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = async (data: FormEditProfileSchema) => {
    try {
      await updateUserInfo({
        email: data.email,
        fullName: data.fullName,
        password: data.password || undefined,
      });

      toast.error("Данные обновлены 📝", {
        icon: "✅",
      });
    } catch (error) {
      return toast.error("Ошибка при обновлении данных", {
        icon: "❌",
      });
    }
  };
  const onClickSignOut = () => {
    Cookies.remove("cartToken");
    signOut({
      callbackUrl: "/",
    });
  };
  return (
    <Container className="my-10">
      <div className="flex justify-between">
        <div>
          <Title text="Личные данные " size="md" className="font-bold" />
          <FormProvider {...form}>
            <form
              className="flex flex-col gap-5 w-96 mt-10"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormInput name="email" label="E-Mail" required />
              <FormInput name="fullName" label="Полное имя" required />

              <FormInput type="password" name="password" label="Новый пароль" />
              <FormInput
                type="password"
                name="confirmPassword"
                label="Повторите пароль"
              />

              <Button
                disabled={form.formState.isSubmitting}
                className="text-base mt-10"
                type="submit"
              >
                Сохранить
              </Button>

              <Button
                onClick={onClickSignOut}
                variant="secondary"
                disabled={form.formState.isSubmitting}
                className="text-base"
                type="button"
              >
                Выйти
              </Button>
            </form>
          </FormProvider>
        </div>
        <div>
          <img src="/assets/images/profile.png" alt="profile" width={600} />
        </div>
      </div>
    </Container>
  );
};
