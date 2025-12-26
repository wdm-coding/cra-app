import {httpService} from '@/utils/services/http'
export interface User {
    id: number;
    name: string;
    username: string;
    phone: string;
}
// 获取用户列表
export function getUsers(): Promise<User[]> {
  return httpService.get('https://jsonplaceholder.typicode.com/users')
}