"use client";
import React, { useState } from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { useSet } from "react-use";
import qs from "qs";
import { useRouter, useSearchParams } from "next/navigation";
interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}
export const Filters: React.FC<Props> = ({ className }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { ingredients, loading, onAddId, selectedIngredients } =
    useFilterIngredients();
  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>([])
  );
  const [prices, setPrice] = React.useState<PriceProps>({});
  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  React.useEffect(() => {
    const filters = {
      ...prices,
      pizzaTypes: Array.from(pizzaTypes),
      sizes: Array.from(sizes),
      ingredients: Array.from(selectedIngredients),
    };

    const query = qs.stringify(filters, { arrayFormat: "comma" });
    router.push(`?${query}`, { scroll: false });
  }, [prices, pizzaTypes, sizes, selectedIngredients, router]);
  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    });
  };
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      {/* Чекбоксы верхние */}
      <CheckboxFiltersGroup
        title="Тип теста"
        name="types"
        className="mb5"
        onClickCheckbox={togglePizzaTypes}
        selected={pizzaTypes}
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" },
        ]}
      />

      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mt-5 mb5"
        onClickCheckbox={toggleSizes}
        selected={sizes}
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
      />
      {/* Фильтр по цене */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0 ₽"
            min={0}
            max={1000}
            value={String(prices.priceFrom)}
            onChange={(e) => {
              updatePrice("priceFrom", Number(e.target.value));
            }}
          />
          <Input
            type="number"
            placeholder="1000 ₽"
            min={100}
            max={1000}
            value={String(prices.priceTo)}
            onChange={(e) => {
              updatePrice("priceTo", Number(e.target.value));
            }}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.priceFrom || 0, prices.priceTo || 1000]}
          onValueChange={([priceFrom, priceTo]) => {
            setPrice({ priceFrom, priceTo });
          }}
        />
      </div>
      {/* Фильтр по цене */}
      <CheckboxFiltersGroup
        title="Ингредиенты"
        className="mt5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selected={selectedIngredients}
        name="ingredients"
      />
    </div>
  );
};
