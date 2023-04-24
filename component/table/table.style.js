import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  th{
    text-align: left;
    text-transform: uppercase;
    color: #ccc;
    font-weight: 600;
    font-size: .7rem;
  }
  td{
    border-top: 1px solid rgba(0,0,0, .1);
  }
`
export const ProductInfoCell = styled.td`
  padding: 10px 0;
`
export const ProductImageBox = styled.div`
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 1px solid rgba(0,0,0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:10px;
  img{
    max-width: 80px;
    max-height: 80px;
  }
`
