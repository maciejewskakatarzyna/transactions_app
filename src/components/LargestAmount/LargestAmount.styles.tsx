import styled from 'styled-components';
export const Wrapper = styled.div`
  width: 37rem;
  max-height: 16rem;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.darkBeige};
  border-radius: 0.3rem;
  padding: 1.5rem 2rem;
  margin-top: 6.2rem;
  overflow-y: scroll;
  box-sizing: content-box;
`;

export const Title = styled.p`
  font-weight: bold;
  margin-bottom: 2rem;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.l};
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.m};
  }
`;

export const AmountDetails = styled.div`
  p {
    font-weight: normal;
    margin-bottom: 1rem;

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.font.size.m};
    }

    ${({ theme }) => theme.mq.tablet} {
      font-size: ${({ theme }) => theme.font.size.s};
    }
  }
`;

export const MaxTransaction = styled.div`
  margin-bottom: 1rem;

  &:last-child hr {
    display: none;
  }
`;
