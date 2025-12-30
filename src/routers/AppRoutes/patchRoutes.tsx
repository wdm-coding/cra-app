import { RouteObject } from 'react-router-dom'
// 增加远程加载的路由
const patchRoutes = (routers: RouteObject[]) => {
  // console.log('patchRoutes', routers)
  return [...routers]
}

export default patchRoutes
