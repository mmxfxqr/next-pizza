"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui";
import Link from "next/link";
import { CartDrawerItem } from "./cart-drawer-item";
import { getCartItemDetails } from "@/shared/lib";
interface Props {
  className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return (
    <div className={className}>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="flex flex-col justify-between pb-0 bg-[#f8eaea]">
          <SheetHeader>
            <SheetTitle>
              В корзине <span className="font-bold">3 товара</span>
            </SheetTitle>
          </SheetHeader>
          <div className="-mx-6 mt-5 overflow-auto flex-1">
          <div className="mb-2">
          <CartDrawerItem
            id={1}
            imageUrl={
              "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.jpg"
            }
            details={getCartItemDetails(1, 20, [])}
            name={"Пепперони фреш"}
            price={500}
            quantity={1}
          />
          </div>
          <div className="mb-2">
          <CartDrawerItem
            id={1}
            imageUrl={
              "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.jpg"
            }
            details={getCartItemDetails(1, 20, [])}
            name={"Пепперони фреш"}
            price={500}
            quantity={1}
          />
          </div>
          <div className="mb-2">
          <CartDrawerItem
            id={1}
            imageUrl={
              "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.jpg"
            }
            details={getCartItemDetails(1, 20, [])}
            name={"Пепперони фреш"}
            price={500}
            quantity={1}
          />
          </div>
          <div className="mb-2">
          <CartDrawerItem
            id={1}
            imageUrl={
              "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.jpg"
            }
            details={getCartItemDetails(1, 20, [])}
            name={"Пепперони фреш"}
            price={500}
            quantity={1}
          />
          </div>
          <div className="mb-2">
          <CartDrawerItem
            id={1}
            imageUrl={
              "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.jpg"
            }
            details={getCartItemDetails(1, 20, [])}
            name={"Пепперони фреш"}
            price={500}
            quantity={1}
          />
          </div>
          <div className="mb-2">
          <CartDrawerItem
            id={1}
            imageUrl={
              "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.jpg"
            }
            details={getCartItemDetails(1, 20, [])}
            name={"Пепперони фреш"}
            price={500}
            quantity={1}
          />
          </div>
          <div className="mb-2">
          <CartDrawerItem
            id={1}
            imageUrl={
              "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.jpg"
            }
            details={getCartItemDetails(1, 20, [])}
            name={"Пепперони фреш"}
            price={500}
            quantity={1}
          />
          </div>
          
          </div>

          <SheetFooter className="-mx-6 bg-white p-8">
            <div className="w-full">
              <div className="flex mb-4">
                <span className="flex flex-1 text-lg text-neutral-500">
                  Итого
                  <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                </span>

                <span className="font-bold text-lg">500 ₽</span>
              </div>
              <Link href="/checkout">
                <Button type="submit" className="w-full h-12 text-base">
                  Оформить заказ
                  <ArrowRight className="w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};
