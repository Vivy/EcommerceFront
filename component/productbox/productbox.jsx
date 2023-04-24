import { useContext } from 'react';
import Button from '../button/button';
import * as S from './productbox.style';
import { CartContext } from '../cartcontext/cartcontext';

const ProductBox = ({ _id, title, price, description }) => {
  const url = '/product/' + _id;
  const { addProduct } = useContext(CartContext);
  return (
    <S.ProductWrapper>
      <S.ProductBox href={url}>
        <div>
          <img src='' alt='this should be the item image' />
        </div>
      </S.ProductBox>
      <S.ProductInfoBox>
        <S.Title href={url}>{title}</S.Title>
        <S.PriceRow>
          <S.Price>${price}</S.Price>
          <Button primary outline onClick={() => addProduct(_id)}>
            Add to cart
          </Button>
        </S.PriceRow>
      </S.ProductInfoBox>
    </S.ProductWrapper>
  );
};

export default ProductBox;
