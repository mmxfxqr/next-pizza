'use client'
import React from "react";
import { Title } from "./title";
import { cn } from "@/shared/lib/utils";
import { ProductCard } from "./product-card";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/shared/store/category";

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  categoryId,
  className,
  listClassName,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });
  React.useEffect(() => {
    if(intersection?.isIntersecting){
      setActiveCategoryId(categoryId)
    }
  }, [categoryId, intersection?.isIntersecting, title, setActiveCategoryId])
  return (
    <div className={cn('mb-10', className)} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((item) => (
          <ProductCard
            id={item.id}
            key={item.id }
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.items[0].price}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};
