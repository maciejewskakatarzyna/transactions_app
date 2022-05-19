import styled from 'styled-components';

export const StyledRow = styled.tr`
  &:nth-child(even) {
    background: ${({ theme }) => theme.color.darkBeige};
  }

  td {
    padding: 1rem;
    line-height: 200%;
  }

  td:first-child {
    width: 35%;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      font-weight: bold;
    }
  }
`;
