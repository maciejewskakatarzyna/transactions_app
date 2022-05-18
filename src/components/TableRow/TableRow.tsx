import React from 'react';
import { StyledRow } from './TableRow.styles';
import { useDispatch } from 'react-redux';
import { removeTransaction, Transaction } from '../../store';
import { EURtoPLN } from '../../helpers/eurToPln';
import { useSumContext } from '../../providers/SumProvider';
import { useConversionRateContext } from '../../providers/ConversionRateProvider';

const TableRow = ({ title, amount, id }: Transaction) => {
  const dispatch = useDispatch();
  const { getSumAfterDelete } = useSumContext();
  const { conversionRate } = useConversionRateContext();

  const handleRemoveTransaction = () => {
    dispatch(removeTransaction({ id }));
    getSumAfterDelete(id);
  };

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
