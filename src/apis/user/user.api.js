import { axiosClient } from '../AxiosClient';

export async function getUserInfo() {
  try {
    const response = await axiosClient.get('/api/user');
    console.log('getUserInfo response: ', response.data);
    return response.data;
  } catch (error) {
    throw new Error('getUserInfo error: ', error);
  }
}

export async function fixUserInfo() {
  try {
    const response = await axiosClient.put('/api/user');
    console.log('fixUserInfo response: ', response.data);
    return response.data;
  } catch (error) {
    throw new Error('FixUserInfo error: ', error);
  }
}

export async function getUserRank(page, size) {
  try {
    const response = await axiosClient.get('api/user/ranking', {
      params: { page, size },
    });
    console.log('getUserRank response: ', response.data);
    return response.data;
  } catch (error) {
    throw new Error('getUserRank error: ', error);
  }
}

export async function getUserStrick(startDate, endDate) {
  try {
    const response = await axiosClient.get('api/user/strick', {
      params: { startDate, endDate },
    });
    console.log('getUserStrick response: ', response.data);
    return response.data;
  } catch (error) {
    throw new Error('getUserStrick error: ', error);
  }
}
