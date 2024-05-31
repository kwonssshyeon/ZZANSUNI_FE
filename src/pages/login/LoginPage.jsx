import { KAKAO_AUTH_URL } from '../../constants/URI';
import * as Styles from './style';
import Logo from '@/assets/login/kakao.svg';

const LoginPage = () => {
  const HandlerKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <>
      <Styles.ButtonSection>
        <Styles.KaKaoLoginButton onClick={HandlerKakaoLogin}>
          <Styles.KaKaoLoginLogo src={Logo} alt='kakao-symbol' />
          <Styles.LoginText>카카오 로그인</Styles.LoginText>
        </Styles.KaKaoLoginButton>
      </Styles.ButtonSection>
    </>
  );
};

export default LoginPage;
