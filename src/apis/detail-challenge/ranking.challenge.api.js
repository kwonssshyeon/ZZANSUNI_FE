import { axiosClient } from '../AxiosClient';


export async function getChallengeRanking(id,page) {
  try {
    const response = await axiosClient.get(`api/challengeGroups/${id}/rankings?page=${page}&size=4`);
    console.log('getChallengeRanking response: ', response.data);
    return response.data.data;
  } catch (error) {
    throw new Error('getChallengeRanking error: ', error);
  }
}



