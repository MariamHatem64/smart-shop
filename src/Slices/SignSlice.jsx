import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
const SignSlice = createSlice({
    name:"sign",
    initialState: {
  users: JSON.parse(localStorage.getItem("users")) || [],
  user: null,
  isLoggedIn: false,
  error: null,
},
    reducers:{


signup: (state, action) => {
  state.users.push(action.payload)

  state.user = action.payload
  state.isLoggedIn = true

  console.log(state.users)

  localStorage.setItem("users", JSON.stringify(state.users))
},



 signin: (state, action) => {

  state.error = null

  const existingUser = state.users.find(
    (user) =>
      user.email === action.payload.email &&
      user.password === action.payload.password
  )

  if (existingUser) {
    state.user = existingUser
    state.isLoggedIn = true
  } else {
    state.error = "البريد الإلكتروني أو كلمة المرور غير صحيحة"
  }



}
 
    }
})


export const { signup,signin } = SignSlice.actions
export default SignSlice.reducer