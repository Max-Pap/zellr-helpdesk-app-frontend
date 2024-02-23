import { createSlice } from '@reduxjs/toolkit'

export interface SortingState {
  value: string
}

const initialState: SortingState = {
  value: 'All teams',
}

export const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    setSorting: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setSorting } = sortingSlice.actions;
export const sortingReducer = sortingSlice.reducer;
