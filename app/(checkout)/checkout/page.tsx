"use client";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCart } from "@/shared/hooks";
import {
  CheckoutAddressFrom,
  CheckoutCart,
  CheckoutPersonalData,
  CheckoutSidebar,
  Container,
  Title,
} from "@/shared/components";
import { checkoutFormSchema, TCheckoutFormFields } from "@/shared/constants";
import { createOrder } from "@/app/actions";
import toast from "react-hot-toast";
import { useState } from "react";
import { useSession } from "next-auth/react";
import React from "react";
import { Api } from "@/shared/services/api-client";
export default function CheckoutPage() {
  const [submitting, setSubmitting] = useState(false);
  const { totalAmount, items, updateItemQuantity, removeCartItem, loading } =
    useCart();
  const { data: session } = useSession();
  const form = useForm<TCheckoutFormFields>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      comment: "",
    },
  });
React.useEffect(() => {
  async function fetchUserInfo() {
    const data = await Api.auth.getMe();
    const [firstName, lastName] = data.fullName.split(' ');

    form.setValue('firstName', firstName);
    form.setValue('lastName', lastName);
    form.setValue('email', data.email);
  }
  if(session){
    fetchUserInfo()
  }
}, [session])
  const onSubmit = async (data: TCheckoutFormFields) => {
    try {
      setSubmitting(true);
      const orderUrl = await createOrder(data); // Получаем URL страницы с деталями заказа
      toast.success(
        "Заказ успешно оформлен! 📝 Детали заказа доступны по ссылке",
        {
          icon: "✅",
        }
      );

      if (orderUrl) {
        location.href = orderUrl; // Редирект на страницу с информацией о заказе
      }
    } catch (err) {
      console.log(err);
      setSubmitting(false);
      toast.error("Произошла ошибка при создании заказа", { icon: "❌" });
    }
  };

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };
  return (
    <Container className="mt-10">
      <Title
        text="Оформление заказа"
        className="font-extrabold mb-8 text-[36px]"
      />
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            {/* Левая часть  */}
            <div className="flex flex-col gap-10 flex-1 mb-20">
              <CheckoutCart
                items={items}
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
                loading={loading}
              />
              <CheckoutPersonalData
                className={loading ? "opacity-40 pointer-events-none" : ""}
              />
              <CheckoutAddressFrom
                className={loading ? "opacity-40 pointer-events-none" : ""}
              />
            </div>
            {/* Правая часть  */}
            <div className="w-[450px]">
              <CheckoutSidebar
                totalAmount={totalAmount}
                loading={loading || submitting}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}
