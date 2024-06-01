import { axiosClient } from '../AxiosClient';


export async function getReview(id,page) {
  try {
    const response = await axiosClient.get(`api/challengeGroups/${id}/reviews` ,{
        params: { page, size:5 },
    });
    console.log('getReview response: ', response.data);
    return response.data.data;
  } catch (error) {
    throw new Error('getReview error: ', error);
  }
}


export async function postReview(id,content,rating) {
  const body = {content, rating};
  console.log("json : ",JSON.stringify(body))
  try {
    const response = await axiosClient.post(`api/challenges/${id}/reviews`, JSON.stringify(body));
    console.log('postReview response: ', response.data);
    return response.data.data;
  } catch (error) {
    throw new Error('postReview error: ', error);
  }
}