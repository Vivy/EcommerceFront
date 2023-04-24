import Link from 'next/link';
import styled from 'styled-components';

export const ProductBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 150px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content:center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`
export const ProductWrapper = styled.div`
  
`

export const Title = styled(Link)`
  font-weight: normal;
  font-size: .9rem;
  margin: 0;
  color: inherit;
  text-decoration: none;
`
export const ProductInfoBox = styled.div`
  margin-top: 5px;
`
export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`

export const Price = styled.div`
   font-size: 1.5rem;
   font-weight: 700;
`
