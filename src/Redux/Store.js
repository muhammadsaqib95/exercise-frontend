import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Reducer/User'
export const store = configureStore({
  reducer: {
    userData: userSlice,
  },
})