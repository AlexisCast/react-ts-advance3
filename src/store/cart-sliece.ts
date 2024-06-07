import { createSlice } from '@reduxjs/toolkit'

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

type CartState = {
  items: CartItem[]
}

const initialState: CartState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart() {

    },
    removeFromCart() {

    }
  }
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer