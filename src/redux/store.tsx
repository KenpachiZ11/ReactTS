import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from "react-redux";

import counterProductSlice from './reducers/product';
import cartShopReducer from './reducers/shop';

export const store = configureStore({
    reducer: {
        'productValue': counterProductSlice,
        'cartShop': cartShopReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// export const useAppDispatch = () => useDispatch<AppDispatch>()