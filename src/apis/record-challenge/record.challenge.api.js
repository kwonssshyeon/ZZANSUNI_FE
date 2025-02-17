import { axiosClient } from '../AxiosClient';


export async function getChallengeRecord(id) {
  try {
    const response = await axiosClient.get(`api/challenges/${id}/record`);
    console.log('getChallengeRecord response: ', response.data);
    return response.data.data;
  } catch (error) {
    throw new Error('getChallengeRecord error: ', error);
  }
}



export async function getChallengeRecordDetail(id) {
  try {
    const response = await axiosClient.get(`api/challenges/record/${id}`);
    console.log('getChallengeRecordDetail response: ', response.data);
    return response.data.data;
  } catch (error) {
    throw new Error('getChallengeRecordDetail error: ', error);
  }
}
