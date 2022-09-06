import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data : {}
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login: (state, action) => {
      state.data = action.payload
    },
    logout: (state) => {
      state.data = {}
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload.amount
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer