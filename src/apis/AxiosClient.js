import axios from 'axios';

import { BASE_URI } from '../constants/URI';

export const axiosClient = axios.create({
  baseURL: BASE_URI,
  headers: {
    'Content-Type': 'application/json',
    'Cross-Control-Allow-Origin': '*',
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    return reject(error);
  }
);

// axiosClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const refreshToken = secureLocalStorage.getItem('refreshToken');
//       if (!refreshToken) {
//         return Promise.reject(error);
//       }
//       const resp = await fetch(
//         `${import.meta.env.VITE_API_BASE_URL}/api/auth/refresh`,
//         {
//           method: 'post',
//           headers: {
//             'Content-Type': 'application/json',
//             'Cross-Control-Allow-Origin': '*',
//             Authorization: `Bearer ${refreshToken}`,
//           },
//         }
//       );
//       if (resp.ok) {
//         console.log('토큰 재발급 성공');
//         const data = await resp.json();
//         secureLocalStorage.setItem('accessToken', data.accessToken);
//         secureLocalStorage.setItem('refreshToken', data.refreshToken);
//         return axiosClient(originalRequest);
//       } else {
//         console.log('토큰 재발급 실패');
//         secureLocalStorage.removeItem('accessToken');
//         secureLocalStorage.removeItem('refreshToken');
//       }
//       return Promise.reject(error);
//     }
//     return Promise.reject(error);
//   }
// );
