import React from 'react';
import TableRow from '../TableRow/TableRow';
import { Info, StyledTable } from './Table.styles';

const transactions = [
  { id: 1, title: 'first', amount: 10 },
  { id: 2, title: 'second', amount: 22 },
  { id: 3, title: 'third', amount: 45 },
];

const Table = () => {
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
        {transactions.map(({ id, title, amount }) => (
          <TableRow id={id} title={title} amount={amount} key={id} />
        ))}
      </tbody>
    </StyledTable>
  ) : (
    <Info>Add first transaction!</Info>
  );
};

export default Table;
