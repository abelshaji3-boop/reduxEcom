import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            let existingProduct = state.cart.find((eachProd) => eachProd.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
                alert('quantity increased');
            } else {
                state.cart.push({
                    ...action.payload,
                    quantity: 1,
                    totalPrice: action.payload.price
                });
                alert('Added to cart');
            }
        },
        reduceQuantityCart: (state, action) => {
            let existingProduct = state.cart.find((eachProd) => eachProd.id === action.payload);
            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
            }
        },
        removeCartItem: (state, idFromComp) => {
            let remainingProducts = state.cart.filter((eachProd) => eachProd.id !== idFromComp.payload)
            state.cart = remainingProducts
        },
        emptyCart: (state) => {
            state.cart = []
        }
    }
});

export const { addToCart, reduceQuantityCart, removeCartItem, emptyCart } = CartSlice.actions;
export default CartSlice.reducer;