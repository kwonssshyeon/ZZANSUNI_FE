import * as Styles from './styles';
import TitleLogo from '@/assets/main/ZZAN-Default.png';

const MainTitle = () => {
  return (
    <>
      <Styles.TitleLayout>
        <Styles.LogoContainer>
          <Styles.TitleLogo src={TitleLogo} alt='ZZAN Logo' />
        </Styles.LogoContainer>
        <Styles.TitleText color='var(--color-green-01)'>
          ZZANSUZI
        </Styles.TitleText>
      </Styles.TitleLayout>
    </>
  );
};

export default MainTitle;
