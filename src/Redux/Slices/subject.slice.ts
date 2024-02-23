import { createSlice } from '@reduxjs/toolkit'

export interface SubjectState {
  value: string
}

const initialState: SubjectState = {
  value: '',
}

export const subjectSlice = createSlice({
  name: 'subject',
  initialState,
  reducers: {
    setSubject: (state, action) => {
      state.value = action.payload
    },
    resetSubject: (state) => {
      state.value = ''
    },
  },
})

export const { setSubject, resetSubject } = subjectSlice.actions;
export const subjectReducer = subjectSlice.reducer;
