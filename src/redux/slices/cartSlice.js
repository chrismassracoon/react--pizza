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
      switch (action.payload[0]) {
        case '+':
          state.pizzas.map((obj, id) => {
            if (
              obj.activeSize == action.payload[1].activeSize &&
              obj.id == action.payload[1].id &&
              obj.activeType == action.payload[1].activeType &&
              obj.actualPrice == action.payload[1].actualPrice
            ) {
              state.pizzas[id].count++;
            }
          });
          state.amount = state.pizzas.reduce((prev, next) => prev + next.count, 0);
          state.sum = state.pizzas.reduce((prev, next) => prev + next.count * next.actualPrice, 0);
          return;
        case '-':
          state.pizzas.map((obj, id) => {
            if (
              obj.activeSize == action.payload[1].activeSize &&
              obj.id == action.payload[1].id &&
              obj.activeType == action.payload[1].activeType &&
              obj.actualPrice == action.payload[1].actualPrice
            ) {
              state.pizzas[id].count--;
            }
          });
          state.amount = state.pizzas.reduce((prev, next) => prev + next.count, 0);
          state.sum = state.pizzas.reduce((prev, next) => prev + next.count * next.actualPrice, 0);
          return;
      }
    },
    deletePizza(state, action) {
      state.pizzas = state.pizzas.filter(
        (obj) =>
          !(
            obj.activeSize == action.payload.activeSize &&
            obj.id == action.payload.id &&
            obj.activeType == action.payload.activeType &&
            obj.actualPrice == action.payload.actualPrice
          ),
      );
      state.sum = state.pizzas.reduce((prev, next) => prev + next.count * next.actualPrice, 0);
      state.amount = state.pizzas.reduce((prev, next) => prev + next.count, 0);
    },
    addPizzas(state, action) {
      if (
        !state.pizzas.some(
          (obj) =>
            obj.activeSize == action.payload.activeSize &&
            obj.activeType == action.payload.activeType &&
            obj.id == action.payload.id &&
            obj.actualPrice == action.payload.actualPrice,
        )
      ) {
        state.pizzas.push({ ...action.payload, count: 1 });
        state.amount++;
      } else {
        state.pizzas.map((obj) => {
          if (
            obj.id == action.payload.id &&
            obj.activeSize == action.payload.activeSize &&
            obj.actualPrice == action.payload.actualPrice
          ) {
            obj.count++;
          }
        });
      }
      state.amount = state.pizzas.reduce((prev, next) => prev + next.count, 0);
      state.sum = state.pizzas.reduce((prev, next) => prev + next.count * next.actualPrice, 0);
    },
    clearPizzas(state) {
      state.pizzas = [];
      state.amount = 0;
      state.sum = 0;
    },
  },
});

export const { clearPizzas, addPizzas, changeAmount, deletePizza } = cartSlice.actions;

export default cartSlice.reducer;
