import indexDBMock from '@/mock/indexdb-mock'
export interface User {
  id?: number;
  name: string;
  username: string;
  phone: string;
  email: string;
  idCard: string;
}
// 获取用户列表
export function getUsers(): Promise<{
  code: number;
  msg: string;
  data: User[] | null;
}> {
  return indexDBMock('/mock/api/getAllUser')
}
// 新增用户
export function addUser(user: User): Promise<{
  code: number;
  msg: string;
  data: User | null;
}> {
  return indexDBMock('/mock/api/addUser', user)
}
// 删除用户
export function deleteUser(id: number): Promise<{
  code: number;
  msg: string;
  data: any;
}> {
  return indexDBMock(`/mock/api/deleteUser`, id)
}
// 更新用户
export function updateUser(user: User): Promise<{
  code: number;
  msg: string;
  data: any;
}> {
  return indexDBMock('/mock/api/updateUser', user)
}
