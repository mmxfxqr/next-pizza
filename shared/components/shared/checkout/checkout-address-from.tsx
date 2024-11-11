import React from "react";
import { WhiteBlock } from "../white-block";
import { Input, Textarea } from "../../ui";

interface Props {
  className?: string;
}

export const CheckoutAddressFrom: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="3. Адрес доставки">
            <div className="flex flex-col gap-5">
              <Input
                name="fistName"
                placeholder="Введите адрес доставки"
                className="text-base"
              />
              <Textarea
                className="text-base"
                rows={5}
                placeholder="Комментарий к заказу"
              />
            </div>
          </WhiteBlock>
  );
};