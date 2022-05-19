import React from 'react';
import { useForm } from 'react-hook-form';
import FormField from './FormField';
import { StyledForm, Wrapper } from './Form.styles';
import { Error } from './FormField.styles';
import { useDispatch } from 'react-redux';
import { addTransaction, Transaction } from '../../store';
import { useSumContext } from '../../providers/SumProvider';
import Button from '../Button/Button';

const Form = () => {
  const dispatch = useDispatch();
  const { getSum } = useSumContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Transaction>();

  const handleAddTransaction = (data: Transaction) => {
    dispatch(addTransaction(data));
    getSum(data);
    reset();
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit(handleAddTransaction)}>
        <FormField
          label='Title of transaction'
          id='title'
          placeholder='Title of transaction'
          {...register('title', {
            required: 'Title is required',
            minLength: {
              value: 5,
              message: 'Title should have at least 5 characters',
            },
          })}
          name='title'
        />
        {errors.title ? (
          <>
            {errors.title.type === 'required' && <Error>{errors.title.message}</Error>}
            {errors.title.type === 'minLength' && <Error>{errors.title.message}</Error>}
          </>
        ) : null}{' '}
        <FormField
          label='Amount (in EUR)'
          id='amount'
          placeholder='0'
          type='number'
          step='0.01'
          {...register('amount', {
            required: 'Amount is required',
          })}
          name='amount'
        />{' '}
        <Button type='submit'>Add</Button>
      </StyledForm>
    </Wrapper>
  );
};

export default Form;
