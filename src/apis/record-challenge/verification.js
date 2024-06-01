import axios from 'axios';

import { BASE_URI } from '../../constants/URI';

const multiPartClient = axios.create({
  baseURL: BASE_URI,
  headers: {
    "Content-Type": "multipart/form-data",
    'Authorization': "Bearer "+localStorage.getItem('accessToken'),
  },
});


export async function postVerification(id, image, content) {
  const formData = new FormData();
  formData.append("body",  new Blob([JSON.stringify({content})], { type: "application/json" }));
  formData.append('image', new Blob([image], { type: "image/**" }));
  
  try {
    const response = await multiPartClient.post(`api/challenges/${id}/verification`, formData);
    console.log('postVerification response: ', response.data);
    return response.data.data;
  } catch (error) {
    throw new Error('postVerification error: ', error);
  }
}



