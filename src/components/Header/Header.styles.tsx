import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    opacity: 1;
  }

  div {
    width: 30rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  input {
    width: 7rem;
    border: none;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-weight: normal;
  margin-bottom: 2rem;
`;

export const CurrencyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
