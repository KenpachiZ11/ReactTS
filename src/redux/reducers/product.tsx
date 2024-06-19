import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store'

interface ICounterState {
    value: number
}

const initialState: ICounterState = {
    value: 0
}

export const counterProductSlice = createSlice({
    name: 'productValue',
    initialState,
    reducers: {
        plus: (state, action) => {
            state.value += 1;
        },
        minus: (state, action) => {
            state.value -= 1;
        },
        reset: (state, action) => {
            state.value = 0;
        },
    }
})

export const { plus, minus, reset } = counterProductSlice.actions;
export const selectCount = (state: RootState) => state.productValue.value;
export default counterProductSlice.reducer;