import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity; // Increase quantity if item already exists
            } else {
                state.push(action.payload); // Add new item
            }
        },
        deleteFromCart(state, action) {
            return state.filter(item => item.id !== action.payload);
        }
    }
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;