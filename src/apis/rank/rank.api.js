import { axiosClient } from '../AxiosClient';

export async function getUserRanking(page, size) {
  try {
    const response = await axiosClient.get('/api/users/ranking', {
      params: { page, size },
    });
    console.log('getUserRanking response: ', response.data);
    return response.data;
  } catch (error) {
    throw new Error('getUserRanking error: ', error);
  }
}
