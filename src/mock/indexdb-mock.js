import db from './db'
const successResult = (data = null) => {
  return {
    code: 0,
    data,
    msg: 'success'
  }
}
const errorResult = (msg = '请求失败') => {
  return {
    code: 1,
    msg,
    data: null
  }
}
const indexDBMock = async (path, params) => {
  switch (path) {
    case '/mock/api/getAllUser':
      const data = await db.getAll('users', null, 10000)
      return successResult(data)
    case '/mock/api/addUser':
      const user = await db.add('users', { ...params })
      return successResult(user)
    case '/mock/api/updateUser':
      const user2 = await db.put('users', { ...params })
      return successResult(user2)
    case '/mock/api/deleteUser':
      const user3 = await db.delete('users', params)
      return successResult(user3)
    default:
      return errorResult()
  }
}

export default indexDBMock
