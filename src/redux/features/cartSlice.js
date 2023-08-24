import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem('cart') || '[]')

const initialState = {
  cart: savedCart || []
}

const cartSlice = createSlice ({
  name : "cartSlice",
  initialState,
  reducers:{

      addToCart: (state, action) => {
      const addBtn = state.cart.findIndex((product) => product.id === action.payload.id);

      if (addBtn >= 0) {
          state.cart[addBtn].qty += 1
      } else {
          const count = { ...action.payload, qty: 1 }
          state.cart = [...state.cart, count]
      }
    },  

    deleteFromCart:(state,action)=>{
      const data = state.cart.filter((product)=>product.id !== action.payload);
      state.cart = data
  },

  removeFromCart:(state,action)=>{
    const removeBtn = state.cart.findIndex((product) => product.id === action.payload.id);

    if(state.cart[removeBtn].qty >=1){
        state.cart[removeBtn].qty -= 1
    }

},

emptyCart:(state,action)=>{
  state.cart = []
}
  }
})

export const {addToCart, deleteFromCart, removeFromCart, emptyCart} = cartSlice.actions

export default cartSlice.reducer