import Center from '../center/center';
import Button from '../button/button';
import * as S from './featured.style';
import ButtonLink from '../buttonlink/buttonlink';
import CartIcon from '../icon/carticon';
import { useContext } from 'react';
import { CartContext } from '../cartcontext/cartcontext';

const Featured = ({ product }) => {
  const { addProduct } = useContext(CartContext);
  const addFeatureToCart = () => {
    addProduct(product._id);
  };
  return (
    <S.Featured>
      <Center>
        <S.Wrapper>
          <S.Column>
            <div>
              <S.Title>{product.title}</S.Title>
              <S.Desc>{product.description}</S.Desc>
              <S.ButtonsWrapper>
                <ButtonLink
                  href={'/products/' + product._id}
                  white={1}
                  outline={1}
                >
                  Read More
                </ButtonLink>
                <Button white onClick={addFeatureToCart}>
                  <CartIcon />
                  Add to cart
                </Button>
              </S.ButtonsWrapper>
            </div>
          </S.Column>
          <S.Column>
            <img src='https://picsum.photos/300/200' alt='random' />
          </S.Column>
        </S.Wrapper>
      </Center>
    </S.Featured>
  );
};

export default Featured;
