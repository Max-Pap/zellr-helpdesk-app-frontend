import { createSlice } from '@reduxjs/toolkit'

export interface ViewState {
  value: string
}

const initialState: ViewState = {
  value: 'chats',
}

export const viewSlice = createSlice({
  name: 'View',
  initialState,
  reducers: {
    setView: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setView } = viewSlice.actions;
export const viewReducer = viewSlice.reducer;
