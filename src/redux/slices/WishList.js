import { createSlice } from '@reduxjs/toolkit'

const WishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        wishlist: []
    },
    reducers: {
        addToWishlist: (state, argFromCmp) => {
            let existingProduct = state.wishlist.find((eachProd) => eachProd.id == argFromCmp.payload.id)
            if (existingProduct) {
                alert('cant add existing product')
            }
            else {
                state.wishlist.push(argFromCmp.payload)
                alert('added to wish list')
            }
        },
        removeFromWishlist: (state, idFromComp) => {
            let remainingProducts = state.wishlist.filter((eachProd) => eachProd.id != idFromComp.payload)
            state.wishlist = remainingProducts
        }
    }
})

export const { addToWishlist, removeFromWishlist } = WishlistSlice.actions
export default WishlistSlice.reducer