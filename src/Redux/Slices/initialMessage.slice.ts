import { createSlice } from '@reduxjs/toolkit'

export interface InitialMessageState {
  value: string
}

const initialState: InitialMessageState = {
  value: '',
}

export const initialMessageSlice = createSlice({
  name: 'initialMessage',
  initialState,
  reducers: {
    setInitialMessage: (state, action) => {
      state.value = action.payload
    },
    resetInitialMessage: (state) => {
      state.value = ''
    },
  },
})

export const { setInitialMessage, resetInitialMessage } = initialMessageSlice.actions;
export const initialMessageReducer = initialMessageSlice.reducer;
