import styled from 'styled-components';

export const StyledTable = styled.table`
  text-align: left;
  margin-bottom: 2rem;
  word-wrap: break-word;
  table-layout: fixed;
  border-collapse: collapse;

  ${({ theme }) => theme.mq.desktop} {
    min-width: 70rem;
    font-size: ${({ theme }) => theme.font.size.m};
  }

  ${({ theme }) => theme.mq.tablet} {
    min-width: 35rem;
    font-size: ${({ theme }) => theme.font.size.s};
  }

  thead {
    background: ${({ theme }) => theme.color.middleBrown};

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
