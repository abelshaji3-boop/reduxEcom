import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getProductData = createAsyncThunk('products/getData', async () => {
    console.log('getProductData thunk start')
    try {
        let result = await axios.get('https://dummyjson.com/products')
        return result.data.products
    } catch (err) {
        console.error('getProductData fetch failed, using fallback sample data', err)
        // Fallback sample products to keep the UI functional when network/API is unavailable
        return [
            { id: 101, title: 'Sample Product A', price: 29.99, thumbnail: null, category: 'sample', description: 'Offline sample product A', brand: 'SampleCo', quantity: 1 },
            { id: 102, title: 'Sample Product B', price: 49.99, thumbnail: null, category: 'sample', description: 'Offline sample product B', brand: 'SampleCo', quantity: 1 },
            { id: 103, title: 'Sample Product C', price: 19.99, thumbnail: null, category: 'sample', description: 'Offline sample product C', brand: 'SampleCo', quantity: 1 }
        ]
    }
})

export const getSinleProductData = createAsyncThunk('products/getSingleProduct', async (id) => {
    let result = await axios.get(`https://dummyjson.com/products/${id}`)
    return result.data
})


const ProductSlice = createSlice({
    name: 'products',
    initialState: {
        products: [
            { id: 201, title: 'Local Sample A', price: 35.0, thumbnail: null, category: 'local', description: 'Local sample A', brand: 'LocalCo', quantity: 1 },
            { id: 202, title: 'Local Sample B', price: 59.0, thumbnail: null, category: 'local', description: 'Local sample B', brand: 'LocalCo', quantity: 1 }
        ],
        loading: false,
        error: "",
        single_product: {}
    },
    extraReducers: (builder) => {
        builder.addCase(getProductData.pending, (state) => {
            state.products = [];
            state.loading = true;
            state.error = '';
            console.log('getProductData pending')
        }),
            builder.addCase(getProductData.fulfilled, (state, apiResponse) => {
                state.products = apiResponse.payload;
                    state.loading = false;
                    state.error = '';
                    console.log('getProductData fulfilled', apiResponse.payload && apiResponse.payload.length)
            }),
            builder.addCase(getProductData.rejected, (state) => {
                state.products = [];
                    state.loading = false;
                    state.error = 'Something went wrong while calling API';
                    console.log('getProductData rejected')
            }),
            builder.addCase(getSinleProductData.pending, (state) => {
                state.loading = true,
                    state.error = '',
                    state.single_product = {}
            }),
            builder.addCase(getSinleProductData.fulfilled, (state, result) => {
                state.loading = false,
                    state.error = '',
                    state.single_product = result.payload
            }),
            builder.addCase(getSinleProductData.rejected, (state) => {
                state.loading = false,
                    state.error = 'something went wrong',
                    state.single_product = {}
            })
    }
})

export default ProductSlice.reducer