import React, { useEffect } from 'react';
import { StyledRow } from './TableRow.styles';
import { useDispatch } from 'react-redux';
import { removeTransaction, Transaction } from '../../store';
import { EURtoPLN } from '../../helpers/eurToPln';
import { useSumContext } from '../../providers/SumProvider';

const TableRow = ({ title, amount, id }: Transaction) => {
  const dispatch = useDispatch();
  const { getSumAfterDelete } = useSumContext();

  const handleRemoveTransaction = () => {
    dispatch(removeTransaction({ id }));
    getSumAfterDelete(id);
  };

  const conversionRate = 0.25;

  const PLNamount = EURtoPLN(amount, conversionRate);

  return (
    <StyledRow data-testid='transactionRow'>
      <td data-testid='transactionTitle'>{title}</td>
      <td>{amount}</td>
      <td>{PLNamount}</td>
      <td>
        <button onClick={handleRemoveTransaction}>Delete</button>
      </td>
    </StyledRow>
  );
};

export default TableRow;
