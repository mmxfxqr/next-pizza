import { Ingredient, ProductItem } from "@prisma/client";
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";
import { calcTotalPizzaPrice } from "./calc-total-pizza-price";

export const getPizzaDetails = (
  ingredients: Ingredient[],
  size: PizzaSize,
  type: PizzaType,
  items: ProductItem[],
  selectedIngredients: Set<number>
) => {
  const textDetails = `${size} см, ${mapPizzaType[type]} тесто`;
  const totalPrice = calcTotalPizzaPrice(
    ingredients,
    size,
    type,
    items,
    selectedIngredients
  );
  return {totalPrice, textDetails}
};
