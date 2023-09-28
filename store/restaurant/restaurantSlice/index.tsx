import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RestaurantProps } from '@/types/index';

interface InitialState {
  items: RestaurantProps[];
}

const initialState: InitialState = {
  items: [],
};

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurants: (state, action: PayloadAction<RestaurantProps[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setRestaurants } = restaurantSlice.actions;

export const restaurantReducer = restaurantSlice.reducer;
