import { prisma } from "@/prisma/prisma-client";

export interface GetSearchParams {
  query?: string;
  sortBy?: string;
  sizes?: string;
  pizzaTypes?: string;
  ingredients?: string;
  priceFrom?: string;
  priceTo?: string;
}

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 1000;

export const findPizzas = async (params: GetSearchParams) => {
  const sizes = params.sizes?.split(",").map(Number);
  const pizzaTypes = params.pizzaTypes?.split(",").map(Number);
  const ingredientsIdArr = params.ingredients?.split(",").map(Number);

  const minPrice = params.priceFrom
    ? Number(params.priceFrom)
    : DEFAULT_MIN_PRICE;
  const maxPrice = params.priceTo ? Number(params.priceTo) : DEFAULT_MAX_PRICE;

  const categories = await prisma.category.findMany({
    include: {
      products: {
        orderBy: {
          id: "desc",
        },
        where: {
          ingredients: ingredientsIdArr
            ? {
                some: {
                  id: {
                    in: ingredientsIdArr,
                  },
                },
              }
            : undefined,
          items: {
            some: {
              size: {
                in: sizes,
              },
              pizzaType: {
                in: pizzaTypes,
              },
              price: {
                gte: minPrice, // >=
                lte: maxPrice, // <=
              },
            },
          },
        },
        include: {
          ingredients: true,
          items: {
            where: {
              price: {
                gte: minPrice,
                lte: maxPrice,
              },
            },
          },
        },
      },
    },
  });
  categories.forEach((category) => {
    console.log(`Category: ${category.name}`);
    category.products.forEach((product) => {
      console.log(`Product: ${product.name}`);
      console.log("Ingredients:", product.ingredients.map(ingredient => ({
        id: ingredient.id,
        name: ingredient.name,
        price: ingredient.price
      })));
      console.log("Items:", product.items.map(item => ({
        id: item.id,
        size: item.size,
        pizzaType: item.pizzaType,
        price: item.price
      })));
    });
  });
  // Сортировка продуктов по минимальной цене их элементов
  categories.forEach((category) => {
    category.products.sort((a, b) => {
      const minPriceA = Math.min(
        ...(a.items.map((item) => item.price) || [Infinity])
      );
      const minPriceB = Math.min(
        ...(b.items.map((item) => item.price) || [Infinity])
      );
      return minPriceA - minPriceB;
    });
  });

  return categories;
};
