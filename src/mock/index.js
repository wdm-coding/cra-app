import Mock from 'mockjs'
// 模拟用户列表
Mock.mock('/mock/api/get_user', 'get', () => {
  return []
})

export default Mock
