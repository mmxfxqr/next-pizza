"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckoutCartOrderItem,
  CheckoutSidebar,
  Container,
  Title,
  WhiteBlock,
} from "@/shared/components/shared";
import { FormInput } from "@/shared/components/shared/form";
import {  Input, Textarea } from "@/shared/components/ui";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { useCart } from "@/shared/hooks";
import { getCartItemDetails } from "@/shared/lib";
import { CheckoutAddressFrom, CheckoutCart, CheckoutPersonalData } from "@/shared/components/shared/checkout";

export default function CheckoutPage() {
  const { totalAmount, items, updateItemQuantity, removeCartItem } = useCart();
  const form = useForm({
    resolver: zodResolver(),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      comment: '',
    }
  });
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
      <div className="flex gap-10">
        {/* Левая часть  */}
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <CheckoutCart items={items} onClickCountButton={onClickCountButton} removeCartItem={removeCartItem} />
          <CheckoutPersonalData />
          <CheckoutAddressFrom/>
        </div>
        {/* Правая часть  */}
        <div className="w-[450px]">
          <CheckoutSidebar totalAmount={totalAmount} />
        </div>
      </div>
    </Container>
  );
}
