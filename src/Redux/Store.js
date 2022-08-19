import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Reducer/Counter'
export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})