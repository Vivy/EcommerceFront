import styled, { css } from 'styled-components';

export const ButtonStyle = css`
  border: 0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
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
  ${({ primary }) => primary && css`
  background-color: #5542F6;
  border: 1px solid #5542F6;
  color: #fff;
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
