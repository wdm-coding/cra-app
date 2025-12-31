import indexDBMock from '@/mock/indexdb-mock'
export interface User {
  id: number;
  name: string;
  username: string;
  phone: string;
}
// 获取用户列表
export function getUsers(): Promise<{
  code: number;
  msg: string;
  data: User[] | null;
}> {
  return indexDBMock('/mock/api/getAllUser')
}