import { httpService } from '@/utils/services/http'
class Api {
  static index = () => {
    return httpService.get<any>('/nodeApi/');
  }
  static getUser = (params: any) => {
    return httpService.get<any>('/nodeApi/getUser', params);
  }
  static setUser = (params: any) => {
    return httpService.post<any>('/nodeApi/setUser', params);
  }
}

export default Api;