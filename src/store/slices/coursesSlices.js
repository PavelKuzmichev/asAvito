import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    getCourses(state, action) {
      state.courses = action.payload.courses
    },
  },
})

export const { getCourses } = coursesSlice.actions

export default coursesSlice.reducer
