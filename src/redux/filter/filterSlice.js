import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterTerm: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterChange(state, { payload }) {
      state.filterTerm = payload;
    },
  },
});

export const { filterChange } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
