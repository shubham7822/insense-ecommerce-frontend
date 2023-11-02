import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      const item = action.payload;
      const existItem = state?.cartItems?.find((x) => x._id === item._id);
      if (existItem) {
        return {
          ...state,
          cartItems: state?.cartItems?.map((x) =>
            x._id === existItem._id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    },  
    removeFromCart: (state,action) => {
      return {
        ...state,
        cartItems:state?.cartItems?.filter(item => item?._id !== action?.payload)
      } 
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer