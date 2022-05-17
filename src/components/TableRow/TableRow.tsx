import React from 'react';
import { StyledRow } from './TableRow.styles';
import { useDispatch } from 'react-redux';
import { removeTransaction, Transaction } from '../../store';

const TableRow = ({ title, amount, id }: Transaction) => {
  const dispatch = useDispatch();

  const handleRemoveTransaction = () => {
    dispatch(removeTransaction({ id: id }));
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
