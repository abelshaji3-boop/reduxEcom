import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from './slices/ProductSlice'
import CartSlice from './slices/CartSlice'
import wishlistSlice from './slices/WishList'



const store = configureStore({
    reducer: {
        productReducer: ProductSlice,
        cartReducer: CartSlice,
        wishlistReducer: wishlistSlice
    }
})

export default store