import { axiosClient } from '../AxiosClient';


export async function getChallengeDetail(id) {
  try {
    const response = await axiosClient.get(`api/challengeGroups/${id}`);
    console.log('getChallengeDetail response: ', response.data);
    return response.data.data;
  } catch (error) {
    throw new Error('getChallengeDetail error: ', error);
  }
}

export async function joinChallenge(id) {
  try {
    const response = await axiosClient.post(`api/challenges/${id}/join`);
    console.log('joinChallenge response: ', response.data);
    return response.data.data;
  } catch (error) {
    throw new Error('joinChallenge error: ', error);
  }
}

