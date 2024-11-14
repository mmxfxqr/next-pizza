'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="e94044e00a784a5592179e97b2e8fe34a2f06e77"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
