import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
  desc?: string ;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  className,
  desc
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex justify-center p-6 rounded-lg">
              <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
            </div>
            <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
            <p className="text-sm text-gray-400">
              {desc}
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-[20px]">
              от <b>{price} ₽</b>
            </span>

            <Button variant="secondary" className="text-base font-bold">
              <Plus className="w-5 h-5 mr-1" />
              Добавить
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};
