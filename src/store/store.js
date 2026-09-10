import { configureStore } from "@reduxjs/toolkit";
import signReducer from "../Slices/SignSlice";
import CartReducer from "../Slices/CartSlice"
const store=configureStore({
   reducer:{
sign: signReducer,
cart:CartReducer
   }
})

export default store