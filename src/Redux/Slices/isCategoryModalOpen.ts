import { createSlice } from "@reduxjs/toolkit";

export interface IsCategoryModalOpenState {
  value: boolean;
}

const initialState: IsCategoryModalOpenState = {
  value: false,
};

export const isCategoryModalOpenSlice = createSlice({
  name: "isCategoryModalOpen",
  initialState,
  reducers: {
    setIsCategoryModalOpen: (state) => {
      state.value = true;
    },
    setIsCategoryModalClose: (state) => {
      state.value = false;
    },
  },
});

export const { setIsCategoryModalOpen, setIsCategoryModalClose } =
  isCategoryModalOpenSlice.actions;
export const isCategoryModalOpenReducer = isCategoryModalOpenSlice.reducer;
