import { createSlice } from '@reduxjs/toolkit'

export interface MessageContentState {
  value: string
}

const initialState: MessageContentState = {
  value: '',
}

export const messageContentSlice = createSlice({
  name: 'messageContent',
  initialState,
  reducers: {
    setMessageContent: (state, action) => {
      state.value = action.payload
    },
    resetMessageContent: (state) => {
      state.value = ''
    },
  },
})

export const { setMessageContent, resetMessageContent } = messageContentSlice.actions;
export const messageContentReducer = messageContentSlice.reducer;
