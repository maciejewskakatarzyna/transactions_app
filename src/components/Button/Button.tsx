import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 0.3rem;
  border: 0.1rem solid ${({ theme }) => theme.color.lightBrown};
  background-color: ${({ theme }) => theme.color.beige};
  color: ${({ theme }) => theme.color.darkBrown};
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.size.m};
  padding: 0.5rem 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.darkBrown};
    color: ${({ theme }) => theme.color.beige};
    border: 0.1rem solid ${({ theme }) => theme.color.darkBrown};
  }
`;

// @ts-ignore
const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
