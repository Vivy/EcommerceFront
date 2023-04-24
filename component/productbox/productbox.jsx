import Button from '../button/button';
import CartIcon from '../icon/carticon';
import * as S from './productbox.style';

const ProductBox = ({ _id, title, price, description }) => {
  const url = '/product/' + _id;
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
          <Button primary outline>
            Add to cart
          </Button>
        </S.PriceRow>
      </S.ProductInfoBox>
    </S.ProductWrapper>
  );
};

export default ProductBox;
