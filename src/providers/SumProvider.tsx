import React, { ReactNode, useState } from 'react';
import { State, Transaction } from '../store';
import { useSelector } from 'react-redux';

interface ISumContext {
  sum: number[];
  getSum: (transaction: Transaction) => void;
  getSumAfterDelete: (id: number) => void;
}

export const SumContext = React.createContext<ISumContext | null>(null);

export const SumProvider = ({ children }: { children: ReactNode }) => {
  const [sum, setSum] = useState<number[]>([]);
  const transactions = useSelector((state: State) => state.transactions);

  const getSum = (transaction: Transaction) => {
    setSum([...sum, parseInt(String(transaction.amount))]);
  };

  const getSumAfterDelete = (id: number) => {
    let sumAfterDelete: number[] = [];
    let filtered = transactions.filter(transaction => transaction.id !== id);
    filtered.forEach(transaction => sumAfterDelete.push(parseInt(String(transaction.amount))));
    setSum(sumAfterDelete);
  };

  return (
    <SumContext.Provider
      value={{
        sum,
        getSum,
        getSumAfterDelete,
      }}
    >
      {children}
    </SumContext.Provider>
  );
};

export const useSumContext = () => {
  const sumContext = React.useContext(SumContext);
  if (!sumContext) {
    throw new Error('Missing SumContext data!');
  }
  return sumContext;
};
