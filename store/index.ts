import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { basketReducer } from './basket/basketSlice';
import { restaurantReducer } from './restaurant/restaurantSlice';

const rootReducer = combineReducers({
  basket: basketReducer,
  restaurant: restaurantReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

/* export type RootState = ReturnType<typeof store.getState>; */
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
