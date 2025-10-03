import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  valuesToServer: {},
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    valuesToServer: (state, action) => {
      state.valuesToServer = { ...state.valuesToServer, ...action.payload }
    },
  },
})

export const { valuesToServer } = formSlice.actions
export default formSlice.reducer
