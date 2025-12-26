import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// 基础配置
const baseConfig: AxiosRequestConfig = {
  baseURL: '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  },
};

// 创建axios实例
const axiosInstance: AxiosInstance = axios.create(baseConfig);

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 添加认证token
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    // 统一错误处理
    if (error.response?.status === 401) {
      // 未授权，跳转到登录页
      localStorage.removeItem('authToken')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
);

export default axiosInstance;