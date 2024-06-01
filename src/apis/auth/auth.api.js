import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { BASE_URI } from '../../constants/URI';

export const AuthAPI = (code, provider, state) => {
  const navigate = useNavigate();

  // 인가 코드 받아서 토큰 요청
  useEffect(() => {
    if (code) {
      const provider = 'KAKAO';
      const state = 'string';
      axios
        // .post(`${BASE_URI}/oauth2?code=${code}`, {
        .post(`${BASE_URI}/api/auth/oauth2`, { provider, code, state })
        .then((res) => {
          const accessToken = res.data.data.accessToken;
          // console.log(accessToken);

          // 로컬 스토리지에 토큰 저장
          localStorage.setItem('accessToken', accessToken);

          navigate('/main');
        })
        .catch((error) => {
          console.error('Error during OAuth2 redirect:', error);
          // logOut();
        });
    }
  }, [code, navigate]);
};

// export async function login(provider, code, state) {
// const resp = await axiosClient.post(
//   '/api/auth/oauth2',
//   provider,
//   code,
//   state
// );
// return resp.data;
// }
