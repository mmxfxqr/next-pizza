import React from "react";
import { Variant } from "../components/shared/group-variants";
import { PizzaSize, PizzaType } from "../constants/pizza";
import { useSet } from "react-use";
import { getAvailablePizzaSizes } from "../lib";
import { ProductItem } from "@prisma/client";
interface ReturnProps {
  size: PizzaSize;
  type: PizzaType;
  selectedIngredients: Set<number>;
  setSize: (size: PizzaSize) => void;
  setType: (type: PizzaType) => void;
  addIngredient: (id: number) => void;
  currentItemId?: number;
  availableSizes: Variant[];
}
export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(2);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );
  const availableSizes = getAvailablePizzaSizes(items, type);
  const currentItemId = items.find((item) => item.size === size && item.pizzaType === type)?.id;
  React.useEffect(() => {
    const isAvailableSize = availableSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const availableSize = availableSizes?.find((item) => !item.disabled);
    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [type]);
  return { size, type, setSize, setType,currentItemId, selectedIngredients, addIngredient,availableSizes,  };
};
