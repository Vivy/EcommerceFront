import styled, { css } from 'styled-components';
import { primarycolor } from '@/lib/colors';

export const ButtonStyle = css`
  border: 0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  svg {
    height: 16px;
    margin-right: 5px;
  }
  ${({ white, outline }) => white && outline && css`
  border: 1px solid white;
  background-color: transparent;
  color: #fff;
  `}
  ${({ white, outline }) => white && !outline && css`
  background-color: #fff;
  color: #000;
  `}
  ${({ primary, outline }) => primary && !outline && css`
  background-color: ${primarycolor};
  border: 1px solid ${primarycolor};
  color: #fff;
  `}
  ${({ primary, outline }) => primary && outline && css`
  background-color: transparent;
  border: 1px solid ${primarycolor};
  color: ${primarycolor};
  `}
  ${({ size }) => size === 'l' && css`
  font-size: 1.2rem;
  padding: 10px 20px;
  svg {
    height: 20px;
  }
  `}
`

export const Button = styled.button`
  ${ButtonStyle}
  `
