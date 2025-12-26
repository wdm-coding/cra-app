import axiosInstance from './request'
import { BaseResponse } from './types';

class HttpService {
  // GET请求
  async get<T>(url: string, params?: any): Promise<T> {
    const response = await axiosInstance.get<BaseResponse<T>>(url, { params });
    return this.handleResponse(response);
  }

  // POST请求
  async post<T>(url: string, data?: any, config?: any): Promise<T> {
    const response = await axiosInstance.post<BaseResponse<T>>(url, data, config);
    return this.handleResponse(response);
  }

  // PUT请求
  async put<T>(url: string, data?: any): Promise<T> {
    const response = await axiosInstance.put<BaseResponse<T>>(url, data);
    return this.handleResponse(response);
  }

  // DELETE请求
  async delete<T>(url: string, params?: any): Promise<T> {
    const response = await axiosInstance.delete<BaseResponse<T>>(url, { params });
    return this.handleResponse(response);
  }
  // handleResponse 处理响应数据
  // 处理响应
  private handleResponse<T>(response: any): T {
    if (response) {
      return response;
    } else {
      throw new Error(response || '请求失败');
    }
  }
}

export const httpService = new HttpService();