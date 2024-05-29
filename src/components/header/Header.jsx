import * as Styles from './styles';
import PrevIcon from '@/assets/header/Prev-Icon.svg';

const Header = ({ title }) => {
  return (
    <>
      <Styles.HeaderLayout>
        <Styles.prevbtnContainer>
          <Styles.prevbtn src={PrevIcon} alt='Prev Icon' />
        </Styles.prevbtnContainer>
        <Styles.HeaderTitleContainer>
          <Styles.HeaderTitle>{title}</Styles.HeaderTitle>
        </Styles.HeaderTitleContainer>
        <Styles.EmptyContainer>&nbsp;</Styles.EmptyContainer>
      </Styles.HeaderLayout>
    </>
  );
};

export default Header;
