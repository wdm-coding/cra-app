import { httpService } from '@/utils/services/http'

// 获取用户列表
export function getUserList(data: {
  pageNum: number,
  pageSize: number,
}) {
  return httpService.get('/expressApi/user/list', data)
}

// 新增用户
export function addUser(data: {
  username: string,
  password: string,
  age: number,
  email: string,
  name: string,
  phone: string,
}) {
  return httpService.post('/expressApi/user/register', data)
}

// 更新用户
export function updateUser(data: {
  id: string,
  age: number,
  email: string,
  name: string,
  phone: string,
  username: string,
}) {
  return httpService.put('/expressApi/user/edit', data)
}

// 删除用户
export function deleteUser(id: string,) {
  return httpService.delete(`/expressApi/user/delete/${id}`)
}

// 申请证书
export function applyCertificate(userId: string) {
  return httpService.post(`/expressApi/user/applyCert/${userId}`)
}

// 注销证书
export function cancelCertificate(userId: string) {
  return httpService.post(`/expressApi/user/cancelCert/${userId}`)
}

// 下载证书
export function downloadCertificate(userId: string) {
  return httpService.get(`/expressApi/user/downloadCert/${userId}`, null, {
    responseType: 'blob',
  })
}