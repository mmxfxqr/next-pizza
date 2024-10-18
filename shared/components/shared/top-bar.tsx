import { cn } from "@/shared/lib/utils";
import React from "react";
import { Container } from "./container";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";
import { Category } from "@prisma/client";

interface Props {
  className?: string;
  categories: Category[];
}

export const TopBar: React.FC<Props> = ({ categories,className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories items={categories}/>
        <SortPopup />
      </Container>
    </div>
  );
};