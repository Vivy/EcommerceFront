import * as S from './button.style';

const Button = ({ children, ...rest }) => {
  return <S.Button {...rest}>{children}</S.Button>;
};

export default Button;
