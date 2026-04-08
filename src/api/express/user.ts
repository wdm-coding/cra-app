import { httpService } from '@/utils/services/http'
// 用户登录
export function userAccountLogin(data: {
  account: string,
  password: string,
}) {
  return httpService.post('/expressApi/user/login', data)
}
// 获取用户信息
export function getExpressUserInfo() {
  return httpService.get('/expressApi/user/info')
}