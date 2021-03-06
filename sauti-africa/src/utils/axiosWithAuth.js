import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'https://real-sauti-studio.herokuapp.com/api',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};