import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface BudgetState {
  income: number;
  value: number;
}

const initialState = { value: 0 } as BudgetState;

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    setAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setAmount } = budgetSlice.actions;
export default budgetSlice.reducer;
