import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import ICartModel from '../../../models/CartModel';

const DB_SERVER = 'http://localhost:3002/shop';

interface ICart {
    cartItems: string[],
    total: number,
    isLoading: boolean,
    error: string | null,
    // value: number
}

const initialState: ICart= {
    cartItems: [],
    total: 0,
    isLoading: false,
    error: null,
    // value: 0,
}


export const getProduct = createAsyncThunk(
    'cart/getShop', () => {
        try {
            return (
                fetch(DB_SERVER)
                .then(resp => resp.json())
                .catch(err => console.log(err))
            )
        } catch (error) {
            console.log(error)
        }
    }
)

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // plus: (state) => {
        //     state.value += 1;
        // },
        // minus: (state) => {
        //     state.value -= 1;
        // },
        // reset: (state) => {
        //     state.value = 0;
        // }
    },

    extraReducers: (builder) =>  {
        builder
            .addCase(getProduct.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cartItems = action.payload;
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error =  action.error.message || 'Something went wrong';
            })
    }
})

// export const { plus, minus, reset } = cartSlice.actions;
export default cartSlice.reducer;
