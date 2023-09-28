import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

import { DishProps } from '@/types/index';

export const selectBasketItemsById = createSelector(
  (state: RootState) => state.basket.items,
  (_: any, _id: string) => _id,
  (items: DishProps[], _id: string) => items.filter((item) => item._id === _id)
);

export const selectBasketItems = (state: RootState) => state.basket.items;

export const selectBasketTotal = (state: RootState) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);
