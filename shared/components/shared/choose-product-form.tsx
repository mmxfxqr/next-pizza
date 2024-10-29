import { cn } from "@/shared/lib/utils";
import React from "react";
import { Title } from "./title";
import { Button } from "@/shared/components/ui";

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  description?: string | null;
  onSubmit?: VoidFunction;
  className?: string;
}

export const ChooseProductForm: React.FC<Props> = ({
  imageUrl,
  name,
  onSubmit,
  className,
  price,
  description,
}) => {
  return (
    <div className={cn(className, "flex flex-col justify-between ")}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
        />
      </div>
      <div className="w-[100%] bg-[#f7f6f5] p-7 pb-4"> {/* Добавили отступ к нижней части контейнера */}
        <Title text={name} size="md" className="font-extrabold mb-1 text-center" />
        <p className="text-gray-400 text-center">{description}</p>
        <Button
          onClick={onSubmit}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Добавить в корзину за {price} ₽
        </Button>
      </div>
    </div>
  );
};
