import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pizzas: [],
  sum: 0,
  amount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeAmount(state, action) {
      switch (action.payload) {
        case '+':
          state.amount++;
          return;
        case '-':
          state.amount--;
          return;
      }
    },
    addPizzas(state, action) {
      if (!state.pizzas.some((i) => JSON.stringify(i) === JSON.stringify(action.payload))) {
        state.pizzas.push(action.payload);
        state.amount++;
      } else {
        console.log(action.payload);
      }
    },
    clearPizzas(state) {
      state.pizzas = [];
      state.amount = 0;
      state.sum = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { clearPizzas, addPizzas, changeAmount } = cartSlice.actions;

export default cartSlice.reducer;
