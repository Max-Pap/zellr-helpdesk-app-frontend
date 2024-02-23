import { createSlice } from "@reduxjs/toolkit";

export interface ChatQueryState {
  value: string;
}

const initialState: ChatQueryState = {
  value: '',
};

export const chatQuerySlice = createSlice({
  name: "chatQuery",
  initialState,
  reducers: {
    setChatQuery: (state, action) => {
      state.value = action.payload;
    },
    resetChatQuery: (state) => {
      state.value = '';
    },
  },
});

export const { setChatQuery, resetChatQuery } = chatQuerySlice.actions;
export const chatQueryReducer = chatQuerySlice.reducer;
