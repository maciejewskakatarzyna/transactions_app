import styled from 'styled-components';

export const StyledTable = styled.table`
  border: 0.1rem solid black;
  text-align: left;
  margin-bottom: 2rem;
  word-wrap: break-word;
  table-layout: fixed;
  border-collapse: collapse;

  thead {
    background: lightgrey;
    height: 3.5rem;
    border: 0.1rem solid black;

    th {
      padding: 1rem;
      border: 0.1rem solid black;
      font-weight: bold;
      line-height: 200%;
    }
  }
`;

export const Info = styled.p`
  font-weight: bold;
  font-size: 2.4rem;
`;
