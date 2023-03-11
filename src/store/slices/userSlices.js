/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.token = action.payload.token
      state.refreshToken = action.payload.refreshToken
      state.userId = action.payload.id
      state.password = action.payload.password
    },
    removeUser(state) {
      state.email = null
      state.token = null
      state.refreshToken = null
      state.userId = null
      state.password = null
    },
    updateUserEmail(state, action) {
      const { email } = action.payload
      state, (state.email = email)
    },
    updateUserPassword(state, action) {
      const { password } = action.payload
      state, (state.password = password)
    },
    
    getId(state, action) {
      const { id } = action.payload
      state, (state.userId = id)
    },
  },
})

export const {
  setUser,
  removeUser,
  updateUserEmail,
  updateUserPassword,
  getId,
} = userSlice.actions

export default userSlice.reducer
