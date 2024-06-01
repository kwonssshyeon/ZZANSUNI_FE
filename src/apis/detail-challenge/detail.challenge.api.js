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



