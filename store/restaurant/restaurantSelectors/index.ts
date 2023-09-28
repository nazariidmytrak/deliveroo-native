import { RootState } from 'store';
import { createSelector } from '@reduxjs/toolkit';

import { RestaurantProps } from '@/types/index';

export const selectAllRestaurants = (state: RootState) =>
  state.restaurant.items;

export const selectRestaurantById = createSelector(
  (state: RootState) => state.restaurant.items,
  (_: any, _id: string) => _id,
  (items: RestaurantProps[], _id: string) =>
    items.find((restaurant) => restaurant._id === _id)
);
