import { createSlice } from "@reduxjs/toolkit";

export interface IsTagModalShownState {
  value: boolean;
}

const initialState: IsTagModalShownState = {
  value: false,
};

export const isTagModalShownSlice = createSlice({
  name: "isTagModalShown",
  initialState,
  reducers: {
    setIsTagModalShown: (state) => {
      state.value = true;
    },
    resetIsTagModalShown: (state) => {
      state.value = false;
    },
  },
});

export const { setIsTagModalShown, resetIsTagModalShown } =
  isTagModalShownSlice.actions;
export const isTagModalShownReducer = isTagModalShownSlice.reducer;
