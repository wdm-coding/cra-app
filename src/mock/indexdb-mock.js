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
const indexDBMock = async (path) => {
  switch (path) {
    case '/mock/api/getAllUser':
      const data = await db.getAll('users')
      return successResult(data)
    default:
      return errorResult()
  }
}

export default indexDBMock
