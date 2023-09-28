import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DishProps } from '@/types/index';

interface InitialState {
  items: DishProps[];
}

export const basketInitialState: InitialState = {
  items: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState: basketInitialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<DishProps>) => {
      state.items.push(action.payload);
    },
    removeFromBasket: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex(
        (item) => item._id === action.payload
      );
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        console.warn(`Can't remove product`);
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const basketReducer = basketSlice.reducer;
