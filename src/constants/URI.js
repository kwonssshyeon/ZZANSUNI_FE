export const BASE_URI = import.meta.env.VITE_APP_BASE_URL;

export const REST_API_KEY = import.meta.env.VITE_APP_REST_API_KEY;
export const REDIRECT_URI = import.meta.env.VITE_APP_REDIRECT_URI;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
