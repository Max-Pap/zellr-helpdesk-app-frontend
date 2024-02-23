import { createSlice } from "@reduxjs/toolkit";

export interface IsNewChatModalOpenState {
  value: boolean;
}

const initialState: IsNewChatModalOpenState = {
  value: false,
};

export const isNewChatModalOpenSlice = createSlice({
  name: "isNewChatModalOpen",
  initialState,
  reducers: {
    setIsNewChatModalOpen: (state) => {
      state.value = true;
    },
    setIsNewChatModalClose: (state) => {
      state.value = false;
    },
  },
});

export const { setIsNewChatModalOpen, setIsNewChatModalClose } =
  isNewChatModalOpenSlice.actions;
export const isNewChatModalOpenReducer = isNewChatModalOpenSlice.reducer;
