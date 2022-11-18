import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageCount: 1,
  categorieId: 0,
  sort: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeSort(state, action) {
      state.sort = action.payload;
    },
    changeFilter(state, action) {
      state.categorieId = action.payload;
    },
    setCurPage(state, action) {
      state.pageCount = action.payload;
    },
  },
});

export const { changeSort, changeFilter, setCurPage } = filterSlice.actions;
export default filterSlice.reducer;
