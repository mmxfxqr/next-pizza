import React from "react";
import { WhiteBlock } from "../white-block";
import { Input } from "../../ui";
import { FormInput, FormTextarea } from "../form";

interface Props {
  className?: string;
}

export const CheckoutAddressFrom: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="3. Адрес доставки">
            <div className="flex flex-col gap-5">
              <FormInput
                name="address"
                placeholder="Введите адрес доставки"
                className="text-base"
              />
              <FormTextarea
                name="comment"
                className="text-base"
                rows={5}
                placeholder="Комментарий к заказу"
              />
            </div>
          </WhiteBlock>
  );
};