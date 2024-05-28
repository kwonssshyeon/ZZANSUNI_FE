import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { BASE_URI } from '@/constants/URI.ts';

export const authApi = (code) => {
  const navigate = useNavigate();

  // 인가코드 받아서 토큰 요청
  useEffect(() => {
    if (code) {
      axios
        .get(`${BASE_URI}/oauth2?code=${code}`, {
          withCredentials: true,
        })
        .then((res) => {
          const accessToken = res.headers.authorization;
          console.log(accessToken);

          // 로컬 스토리지에 토큰 저장
          localStorage.setItem('accessToken', accessToken);

          // 페이지 이동
          navigate(-2);
        })
        .catch((error) => {
          console.error('Error during OAuth2 redirect:', error);
          // logOut();
        });
    }
  }, [code, navigate]);
};
