import axios from 'axios';
import { baseUrl } from '../../constants/defaultValues';
import { getToken } from '../../helpers/Utils';

export const sumbitModelService = async (data) => {
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  const token = getToken();
  console.log(token);
  try {
    const response = await axios.post(`${baseUrl}/model/create`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch ({ response }) {
    return response;
  }
};
