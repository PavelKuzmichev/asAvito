import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlices'
import coursesReducer from './slices/coursesSlices'

export const store = configureStore({
  reducer: {
    user: userReducer,
    courses: coursesReducer,
  },
})
