import { axiosClient } from '../AxiosClient';

// 카테고리 버튼 눌렀을때 -> 해당 페이지 호출
export async function getCurrentChallengeList(page, size) {
  try {
    const response = await axiosClient.get(`/api/user/challenges/currents`, {
      params: { page, size },
    });
    console.log('getCurrentChallengeList response: ', response.data);
    return response.data;
  } catch (error) {
    throw new Error('getCurrentChallengeList error: ', error);
  }
}
