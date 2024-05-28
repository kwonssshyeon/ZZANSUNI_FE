import axios from 'axios';

import { BASE_URI } from '@/constants/URI.ts';

export const axiosClient = axios.create({
  baseURL: BASE_URI,
  headers: {
    /**
     *  Content-Type: 현재 전송하는 데이터의 타입을 설명
     *  application/json: JSON 형태로 데이터를 전송
     * */
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
