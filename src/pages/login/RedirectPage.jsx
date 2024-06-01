import React from 'react';

import { AuthAPI } from '../../apis/auth/auth.api';
import { BASE_URI } from '../../constants/URI';

const RedirectPage = () => {
  const code = new URLSearchParams(window.location.search).get('code');
  const provider = 'KAKAO';
  const state = 'string';

  console.log(`${BASE_URI}/oauth2?code=${code}`);
  AuthAPI(code, provider, state);

  return <div>로그인 성공</div>;
};

export default RedirectPage;
