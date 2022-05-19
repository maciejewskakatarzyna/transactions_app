import styled from 'styled-components';
export const Wrapper = styled.div`
  width: 35rem;
  height: 50%;
  margin-top: 6.2rem;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.darkBeige};
  border-radius: 0.3rem;
  padding: 1.5rem 2rem;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.size.l};
  margin-bottom: 2rem;
`;

export const AmountDetails = styled.div`
  p {
    font-weight: normal;
    font-size: ${({ theme }) => theme.font.size.m};
    margin-bottom: 1rem;
  }
`;
