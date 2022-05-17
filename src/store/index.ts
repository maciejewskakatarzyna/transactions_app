import faker from '@withshepherd/faker';
import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';

export interface Transaction {
  id: number;
  title: string;
  amount: number;
}

const initialTransactionsState: Transaction[] = [];

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: initialTransactionsState,
  reducers: {
    addTransaction(state, action) {
      state.push({
        ...action.payload,
        id: faker.datatype.uuid(),
      });
    },
    removeTransaction(state, action) {
      return state.filter(transaction => transaction.id !== action.payload.id);
    },
  },
});

export const { addTransaction, removeTransaction } = transactionsSlice.actions;

export const store = configureStore({
  reducer: {
    transactions: transactionsSlice.reducer,
  },
});

const rootReducer = combineReducers({
  transactions: transactionsSlice.reducer,
});

export type State = ReturnType<typeof rootReducer>;
