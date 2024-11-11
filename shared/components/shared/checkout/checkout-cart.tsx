import React from "react";
import { WhiteBlock } from "../white-block";
import { CheckoutCartOrderItem } from "../checkout-cart-order-item";
import { getCartItemDetails } from "@/shared/lib";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { CartStateItem } from "@/shared/lib/get-cart-details";

interface Props {
  items: CartStateItem[];
  onClickCountButton: (id: number, quantity: number, type: "plus" | "minus") => void;
  removeCartItem: (id: number) => void;
  className?: string;
}

export const CheckoutCart: React.FC<Props> = ({ className, items,onClickCountButton, removeCartItem }) => {
  return (
    <WhiteBlock title="1. Корзина">
      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <CheckoutCartOrderItem
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrl}
            details={getCartItemDetails(
              item.ingredients,
              item.pizzaType as PizzaType,
              item.pizzaSize as PizzaSize
            )}
            name={item.name}
            disabled={item.disabled}
            price={item.price}
            quantity={item.quantity}
            onClickCountButton={(type) =>
              onClickCountButton(item.id, item.quantity, type)
            }
            onClickRemove={() => removeCartItem(item.id)}
          />
        ))}
      </div>
    </WhiteBlock>
  );
};
