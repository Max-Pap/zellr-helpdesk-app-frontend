import { createSlice } from "@reduxjs/toolkit";

export interface ChosenCategoryState {
  value: string;
}

const initialState: ChosenCategoryState = {
  value: "",
};

export const chosenCategorySlice = createSlice({
  name: "chosenCategory",
  initialState,
  reducers: {
    setChosenCategory: (state, action) => {
      state.value = action.payload;
    },
    resetChosenCategory: (state) => {
      state.value = "";
    },
  },
});

export const { setChosenCategory, resetChosenCategory } =
  chosenCategorySlice.actions;
export const chosenCategoryReducer = chosenCategorySlice.reducer;
