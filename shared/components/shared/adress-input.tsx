'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import { cn } from '@/shared/lib/utils';

interface Props {
  onChange?: (value?: string) => void;
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <div
      className={cn(
        "relative flex h-9 w-full items-center rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-within:ring-1 focus-within:ring-ring h-11"
      )}
    >
      <AddressSuggestions
        token="e94044e00a784a5592179e97b2e8fe34a2f06e77"
        onChange={(data) => onChange?.(data?.value)}
        inputProps={{
          className: cn(
            "w-full bg-transparent border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground"
          ),
        }}
        containerClassName="relative w-full" // Оборачиваемый контейнер
        suggestionsClassName="absolute z-10 w-full rounded-md shadow-lg bg-white border border-gray-300" // Меню подсказок
        highlightClassName = "bg-primary text-white"
      />
    </div>
  );
};
