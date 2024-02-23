import { createSlice } from "@reduxjs/toolkit";

export interface IsNoteModalShownState {
  value: boolean;
}

const initialState: IsNoteModalShownState = {
  value: false,
};

export const isNoteModalShownSlice = createSlice({
  name: "isNoteModalShown",
  initialState,
  reducers: {
    setIsNoteModalShown: (state) => {
      state.value = true;
    },
    resetIsNoteModalShown: (state) => {
      state.value = false;
    },
  },
});

export const { setIsNoteModalShown, resetIsNoteModalShown } =
  isNoteModalShownSlice.actions;
export const isNoteModalShownReducer = isNoteModalShownSlice.reducer;
