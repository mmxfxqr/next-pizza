import { cn } from "@/shared/lib/utils";
import { Pizza } from "lucide-react";
import React from "react";
import { PizzaImage } from "./pizza-image";
import { Title } from "./title";
import { Button } from "@/shared/components/ui";
import { GroupVariants } from "./group-variants";
import { PizzaSize, pizzaSizes, PizzaType, pizzaTypes } from "@/shared/constants/pizza";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: any;
  items: any;
  onClickAdd?: VoidFunction;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  imageUrl,
  name,
  ingredients,
  items,
  onClickAdd,
  className,
}) => {
  const [size, setSizes] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(2);
  const textDetails = "30см, традиционное тесто 30";
  const totalPrice = 500;

  return (
    <div className={cn(className, "flex flex-1 ")}>
      <PizzaImage imageUrl={imageUrl} size={size} />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
        <div className="flex flex-col gap-5 mt-5">
        <GroupVariants
          items={pizzaSizes}
          value={String(size)}
          onClick={(value) => setSizes(Number(value) as PizzaSize)}
        />
        <GroupVariants
          items={pizzaTypes}
          value={String(type)}
          onClick={(value) => setType(Number(value) as PizzaType)}
        />
        </div>
        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
