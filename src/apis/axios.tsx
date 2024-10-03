import axios from 'axios';

const useAxiosInstance = () => {
  // axios 인스턴스 생성
  const instance = axios.create({
    baseURL: 'https://api.user.algopuni.site/api/v1',
    headers: {
      accept: 'application/json',
    },
    withCredentials: true,
  });

  // instance.interceptors.request.use(
  //   (config) => {
  //     if (accessToken) {
  //       config.headers.Authorization = `Bearer ${accessToken}`;
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  return instance;
};

export default useAxiosInstance;
