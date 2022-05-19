import styled from 'styled-components';

export const StyledTable = styled.table`
  text-align: left;
  margin-bottom: 2rem;
  word-wrap: break-word;
  table-layout: fixed;
  border-collapse: collapse;

  thead {
    background: ${({ theme }) => theme.color.middleBrown};
    height: 3.5rem;

    th {
      padding: 1rem;
      font-weight: bold;
      line-height: 200%;
    }
  }
`;

export const Info = styled.p`
  font-weight: bold;
  font-size: 2.4rem;
`;
