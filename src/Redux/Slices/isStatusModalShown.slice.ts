import { createSlice } from "@reduxjs/toolkit";

export interface IsStatusModalShownState {
  value: boolean;
}

const initialState: IsStatusModalShownState = {
  value: false,
};

export const isStatusModalShownSlice = createSlice({
  name: "isStatusModalShown",
  initialState,
  reducers: {
    setIsStatusModalShown: (state) => {
      state.value = true;
    },
    resetIsStatusModalShown: (state) => {
      state.value = false;
    },
  },
});

export const { setIsStatusModalShown, resetIsStatusModalShown } =
  isStatusModalShownSlice.actions;
export const isStatusModalShownReducer = isStatusModalShownSlice.reducer;
