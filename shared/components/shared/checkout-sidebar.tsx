import React from "react";
import { WhiteBlock } from "./white-block";
import { ArrowRight, Pizza, Truck } from "lucide-react";
import { Button } from "../ui";
import { CheckoutSidebarItem } from "./checkout-sidebar-item";

interface Props {
  className?: string;
  totalAmount: number;
}
const DELIVERY_PRICE = 120;

export const CheckoutSidebar: React.FC<Props> = ({
  className,
  totalAmount,
}) => {
  return (
    <WhiteBlock className="p-6 sticky top-4">
      <div className="flex flex-col gap-1">
        <span className="text-xl">Итого:</span>
        <span className="text-[34px] font-extrabold">
          {totalAmount + DELIVERY_PRICE} ₽
        </span>
      </div>

      <CheckoutSidebarItem
        title={
          <div className="flex items-center">
            <Pizza size={20} className="mr-2 text-gray-300" />
            Стоимость корзины:
          </div>
        }
        value={String(totalAmount)}
      />
      <CheckoutSidebarItem
        title={
          <div className="flex items-center">
            <Truck size={20} className="mr-2 text-gray-300" />
            Доставка:
          </div>
        }
        value={String(DELIVERY_PRICE)}
      />
      <Button
        type="submit"
        className="w-full h-14 rounded-2xl mt-6 font-bold text-base"
      >
        Перейти к оплате
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  );
};