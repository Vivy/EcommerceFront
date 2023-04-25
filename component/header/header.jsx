import * as S from './header.style';
import Center from '../center/center';
import { useContext } from 'react';
import { CartContext } from '../cartcontext/cartcontext';

const Header = () => {
  const { cartProducts } = useContext(CartContext);
  return (
    <S.Header>
      <Center>
        <S.Wrapper>
          <S.Logo href={'/'}>Ecommerce</S.Logo>
          <S.StyledNav>
            <S.NavLink href={'/'}>Home</S.NavLink>
            <S.NavLink href={'/products'}>All Products</S.NavLink>
            <S.NavLink href={'/categories'}>Categories</S.NavLink>
            <S.NavLink href={'/account'}>Account</S.NavLink>
            <S.NavLink href={'/cart'}>Cart({cartProducts.length})</S.NavLink>
          </S.StyledNav>
        </S.Wrapper>
      </Center>
    </S.Header>
  );
};

export default Header;
