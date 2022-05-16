import React from 'react';
import { StyledRow } from './TableRow.styles';

const TableRow = ({ title, amount, id }: { title: string; amount: number; id: number }) => {
  const handleRemoveTransaction = () => {
    console.log('delete');
  };

  return (
    <StyledRow data-testid='transactionRow'>
      <td data-testid='transactionTitle'>{title}</td>
      <td>{amount}</td>
      <td>PLN amount</td>
      <td>
        <button onClick={handleRemoveTransaction}>Delete</button>
      </td>
    </StyledRow>
  );
};

export default TableRow;
