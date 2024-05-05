import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://66373659288fedf6937fbb81.mockapi.io/adverts',
});

export const getAllCampers = async () => {
  const { data } = await api.get('campers');
  return data;
};
