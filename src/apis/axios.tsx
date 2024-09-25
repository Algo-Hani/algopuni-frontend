import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.user.algopuni.site/api/v1',
  headers: {
    accept: 'application/json',
  },
});

export default instance;
