import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({

  name: "cart",

  initialState: {
    cartItems: []
  },

  reducers: {

    addtocart: (state, action) => {

      const product = action.payload

      const quantity = product.quantity || 1

      const existingProduct = state.cartItems.find(
        (item) =>
          item.id === product.id &&
          item.selectedColor === product.selectedColor &&
          item.selectedSize === product.selectedSize
      )

      if (existingProduct) {

        existingProduct.quantity += quantity

      } else {

        state.cartItems.push({
          ...product,
          quantity: quantity
        })

      }

    },


   removefromcart: (state, action) => {

  state.cartItems = state.cartItems.filter(
    (item) =>
      !(
        item.id === action.payload.id &&
        item.selectedColor === action.payload.selectedColor &&
        item.selectedSize === action.payload.selectedSize
      )
  )

},


    increasequantity: (state, action) => {

  const product = state.cartItems.find(
    (item) =>
      item.id === action.payload.id &&
      item.selectedColor === action.payload.selectedColor &&
      item.selectedSize === action.payload.selectedSize
  )

  if (product) {
    product.quantity += 1
  }

},


decreasequantity: (state, action) => {

  const product = state.cartItems.find(
    (item) =>
      item.id === action.payload.id &&
      item.selectedColor === action.payload.selectedColor &&
      item.selectedSize === action.payload.selectedSize
  )

  if (product) {

    if (product.quantity > 1) {
      product.quantity -= 1

    } else {

      state.cartItems = state.cartItems.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.selectedColor === action.payload.selectedColor &&
            item.selectedSize === action.payload.selectedSize
          )
      )

    }

  }

},


    clearcart: (state) => {

      state.cartItems = []

    }

  }

})


export const {
  addtocart,
  removefromcart,
  increasequantity,
  decreasequantity,
  clearcart
} = CartSlice.actions


export default CartSlice.reducer