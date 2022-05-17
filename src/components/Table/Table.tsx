import React from 'react';
import TableRow from '../TableRow/TableRow';
import { Info, StyledTable } from './Table.styles';
import { useSelector } from 'react-redux';
import { State, Transaction } from '../../store';

const Table = () => {
  const transactions = useSelector((state: State) => state.transactions);

  return transactions.length ? (
    <StyledTable>
      <thead>
        <tr>
          <th>Title</th>
          <th>Amount (EUR)</th>
          <th>Amount (PLN)</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, title, amount }: Transaction) => (
          <TableRow id={id} title={title} amount={amount} key={id} />
        ))}
      </tbody>
    </StyledTable>
  ) : (
    <Info>Add first transaction!</Info>
  );
};

export default Table;
