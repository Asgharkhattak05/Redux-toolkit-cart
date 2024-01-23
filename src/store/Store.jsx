import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice"
import ModalReducer from "../features/modal/ModalSlice"; 

const Store=configureStore({
    reducer:{
        cart:cartReducer,
        modal:ModalReducer
    }
})

export default Store