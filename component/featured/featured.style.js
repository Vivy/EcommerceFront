import styled from 'styled-components';

export const Featured = styled.div`
  background-color: #222;
  color: white;
  padding: 50px 0;
`
export const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3rem;
`
export const Desc = styled.p`
  color: #aaa;
  font-size: .8rem;
`
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  gap: 40px;
  img{
    max-width: 100%;
  }
`
export const Column = styled.div`
  display: flex;
  align-items: center;
`
export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`
