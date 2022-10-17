import { configureStore } from "@reduxjs/toolkit";
// We'll use redux-logger just as an example of adding another middleware
import budgetReducer from "./budgetSlice";
import transactionReducer from "./transactionSlice";

const reducer = {
  budget: budgetReducer,
  transaction: transactionReducer,
};

export const store = configureStore({
  reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
