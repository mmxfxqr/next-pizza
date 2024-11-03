"use client";
import { ProductWithRelations } from "@/@types/prisma";
import { useCartStore } from "@/shared/store";
import React from "react";
import toast from "react-hot-toast";
import { ChoosePizzaForm } from "./choose-pizza-form";
import { ChooseProductForm } from "./choose-product-form";

interface Props {
  product: ProductWithRelations;
  onSubmit?: VoidFunction;
  isPage: boolean;
}

export const ProductForm: React.FC<Props> = ({ product, onSubmit: _onSubmit,isPage }) => {
  const [addCartItem, loading] = useCartStore((state) => [
    state.addCartItem,
    state.loading,
  ]);
  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);
  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId || firstItem.id;
      await addCartItem({
        productItemId: itemId,
        ingredients,
      });
      toast.success(product.name + " успешно добавлен в корзину");
      _onSubmit?.();
    } catch (error) {
      toast.error("Произошла ошибка при добавлении в корзину");
      console.error(error);
    }
  };
  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        imageUrl={product.imageUrl}
        name={product.name}
        ingredients={product.ingredients}
        items={product.items}
        onSubmit={onSubmit}
        loading={loading}
      />
    );
  }

  return (
    <ChooseProductForm
      imageUrl={product.imageUrl}
      name={product.name}
      onSubmit={onSubmit}
      price={firstItem.price}
      description={product.desc}
      loading={loading}
      isPage={isPage}
    />
  );
};
