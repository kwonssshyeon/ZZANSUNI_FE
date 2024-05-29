import * as S from "./styles";

const Header = ({date}) => {
  return (
    <S.HeaderWrapper>
      <S.Text>{date}</ S.Text><S.HandleBar />
    </S.HeaderWrapper>
  );
};

export default Header;
