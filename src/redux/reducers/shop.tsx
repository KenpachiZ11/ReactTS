import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import ICartModel from '../../../models/CartModel';

const DB_SERVER = 'http://localhost:3002/shop';

interface ICart {
    cartItems: string[],
    total: number,
    isLoading: boolean,
    error: string | null,
    // filterCardShop: IFilterCardShop[]
    // value: number
}

// interface IFilterCardShop {
//     all: string,
//     // type: string,
//     clothes?: string,
//     electronics?: string,
//     furniture?: string,
//     foodProducts?: string
// }

export const filterCardShop = {
    all: 'all',
    // type: string,
    clothes: 'clothes',
    electronics: 'electronics',
    furniture: 'furniture',
    foodProducts: 'foodProducts'
}

const initialState: ICart = {
    cartItems: [],
    total: 0,
    isLoading: false,
    error: null,
    // filterCardShop: [],
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
        // filterCardShopItem: (state, action) => {
        //     state.filterCardShop = action.payload;
        // },
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

// export const {  } = cartSlice.actions;
export default cartSlice.reducer;
