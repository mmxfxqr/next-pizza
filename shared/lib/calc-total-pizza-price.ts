import { Ingredient, ProductItem } from "@prisma/client";
import {PizzaSize, PizzaType } from "../constants/pizza";
/**
 * Функция для вычисления общей стоимости пиццы
 * @param ingredients - список ингредиентов
 * @param size - размер выбранной пиццы
 * @param type - тип теста выбранной пиццы
 * @param items - список вариаций
 * @param selectedIngredients  - выбранные ингредиенты
 * @returns number общая стоимость пиццы
 */
export const calcTotalPizzaPrice = (
  ingredients : Ingredient[],
  size : PizzaSize,
  type : PizzaType,
  items: ProductItem[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice =
    items.find((item) => item.pizzaType === type && item.size === size)
      ?.price || 0;
  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);
  return pizzaPrice + totalIngredientsPrice;
};
