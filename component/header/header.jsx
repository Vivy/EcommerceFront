import Link from 'next/link';
import * as S from './header.style';
import Center from '../center/center';

const Header = () => {
  return (
    <S.Header>
      <Center>
        <S.Wrapper>
          <S.Logo href={'/'}>Ecommerce</S.Logo>
          <S.StyledNav>
            <S.NavLink href={'/'}>Home</S.NavLink>
            <S.NavLink href={'/products'}>Products</S.NavLink>
            <S.NavLink href={'/categories'}>Categories</S.NavLink>
            <S.NavLink href={'/account'}>Account</S.NavLink>
            <S.NavLink href={'/cart'}>Cart(0)</S.NavLink>
          </S.StyledNav>
        </S.Wrapper>
      </Center>
    </S.Header>
  );
};

export default Header;
