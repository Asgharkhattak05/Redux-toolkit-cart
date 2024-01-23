import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 2,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart(state, action) {
      return {
        ...state,
        cartItems: [],
      };
    },

    IncAmount: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount = cartItem.amount + 1;
      //   console.log(action.payload);
      // const {amount}=state
      // let amounts=amount
      // if(amount < 5){
      //    amounts = amount + 1
      // }
      // return{
      //     ...state,
      //     amount : amounts
      // }
      // console.log(amount);
    },
    DecAmount: (state, action) => {
      const cartitem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartitem.amount = cartitem.amount - 1;
      // const {amount}=state
      // let amounts=amount
      // if(amount >= 1){
      //  amounts= amount -1
      // }
      // return{
      //     ...state,
      //     amount:amounts
      // }
      // console.log(action.payload);
    },

    removeSinglItem: (state, action) => {
      // console.log("Single Item Removed ", action.payload)
      const finData = state.cartItems.filter(
        (data) => data.id !== action.payload
      );
      return {
        ...state,
        cartItems: finData,
      };
    },

    calculateTotals: (state, action) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount = amount + item.amount;
        total = total + item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { addToCart, clearCart, removeSinglItem, IncAmount, DecAmount,calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
