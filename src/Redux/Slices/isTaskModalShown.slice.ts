import { createSlice } from "@reduxjs/toolkit";

export interface IsTaskModalShownState {
  value: boolean;
}

const initialState: IsTaskModalShownState = {
  value: false,
};

export const isTaskModalShownSlice = createSlice({
  name: "isTaskModalShown",
  initialState,
  reducers: {
    setIsTaskModalShown: (state) => {
      state.value = true;
    },
    resetIsTaskModalShown: (state) => {
      state.value = false;
    },
  },
});

export const { setIsTaskModalShown, resetIsTaskModalShown } =
  isTaskModalShownSlice.actions;
export const isTaskModalShownReducer = isTaskModalShownSlice.reducer;
