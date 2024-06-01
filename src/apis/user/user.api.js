// import { axiosClient } from '../AxiosClient';
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

export async function fixUserInfo(nickname) {
  try {
    const response = await axiosClient.put('/api/user', {
      nickname, // Sending the nickname as per API specification
    });
    console.log('fixUserInfo response:', response.data);
    return response.data;
  } catch (error) {
    console.error('FixUserInfo error:', error);
    throw new Error('Failed to update user info');
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
