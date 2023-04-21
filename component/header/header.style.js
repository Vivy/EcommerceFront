import Link from 'next/link';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: #222;
`
export const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`
export const NavLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
`
export const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
`
