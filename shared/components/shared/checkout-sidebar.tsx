import React from "react";
import { WhiteBlock } from "./white-block";
import { ArrowRight, Pizza, Truck } from "lucide-react";
import { Button, Skeleton } from "../ui";
import { CheckoutSidebarItem } from "./checkout-sidebar-item";
import { cn } from "@/shared/lib/utils";

interface Props {
  className?: string;
  loading?: boolean;
  totalAmount: number;
}
const DELIVERY_PRICE = 120;

export const CheckoutSidebar: React.FC<Props> = ({
  className,
  loading,
  totalAmount,
}) => {
  return (
    <WhiteBlock className={cn("p-6 sticky top-4", className)}>
      <div className="flex flex-col gap-1">
        <span className="text-xl">Итого:</span>
        {loading ? (
          <Skeleton className="h-11 w-48   " />
        ) : (
          <span className="text-[34px] font-extrabold h-11">
            {totalAmount + DELIVERY_PRICE} ₽
          </span>
        )}
      </div>

      <CheckoutSidebarItem
        title={
          <div className="flex items-center">
            <Pizza size={20} className="mr-2 text-gray-300" />
            Стоимость корзины:
          </div>
        }
        value={
          loading ? (
            <Skeleton className="h-6 w-14 rounded-[6px] mr-1" />
          ) : (
            String(totalAmount)
          )
        }
      />
      <CheckoutSidebarItem
        title={
          <div className="flex items-center">
            <Truck size={20} className="mr-2 text-gray-300" />
            Доставка:
          </div>
        }
        value={
          loading ? (
            <Skeleton className="h-6 w-14 rounded-[6px] mr-1" />
          ) : (
            String(DELIVERY_PRICE)
          )
        }
      />
      <Button
        loading={loading}
        type="submit"
        className="w-full h-14 rounded-2xl mt-6 font-bold text-base"
      >
        Перейти к оформлению заказа
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  );
};
