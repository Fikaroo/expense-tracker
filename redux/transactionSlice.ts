import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TransactionsData {
  transactions: object[];
}

const initialState = {
  transactions: [],
} as TransactionsData;

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<any>) => {
      state.transactions.push(action.payload);
    },
    deleteTransaction: (state, action: PayloadAction<any>) => {
      const filteredTransaction = state.transactions.filter(
        (transaction: any) => transaction.id !== action.payload
      );
      state.transactions = [...filteredTransaction];
    },
  },
});

export const { addTransaction, deleteTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
