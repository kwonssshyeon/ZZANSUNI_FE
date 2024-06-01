import { useNavigate } from 'react-router-dom';

import * as Styles from './styles';
import TitleLogo from '@/assets/main/ZZAN-Default.png';

const MainTitle = () => {
  const navigate = useNavigate();
  const handlerNavigate = () => {
    navigate('/');
  };

  return (
    <>
      <Styles.TitleLayout onClick={handlerNavigate}>
        <Styles.LogoContainer>
          <Styles.TitleLogo src={TitleLogo} alt='ZZAN Logo' />
        </Styles.LogoContainer>
        <Styles.TitleText fs='1.75rem' color='var(--color-green-01)'>
          ZZANSUZI
        </Styles.TitleText>
      </Styles.TitleLayout>
    </>
  );
};

export default MainTitle;
