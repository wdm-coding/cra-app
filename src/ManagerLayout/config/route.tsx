import { useState, useEffect } from 'react'
import { getServerMenuData } from '@/routers/AppRoutes/asyncRoutes'
// 将后台菜单数据转换为 ProLayout 需要的路由格式
export const convertRoutes = (data: any) => {
  const result: any[] = []
  data.forEach((item: any) => {
    const route: any = {
      path: '/manager' + item.path,
      name: item.name,
      children: []
    }
    if (item.children) {
      route.children = convertRoutes(item.children)
    }
    result.push(route)
  })
  return result
}
const initRoutes = [
  { path: '/manager', name: '首页' },
  { path: '/manager/reduxStore', name: '用户管理' }
]
const useRouteConfig = () => {
  const [routes, setRoutes] = useState(initRoutes)
  useEffect(() => {
    getServerMenuData().then((res: any) => {
      if (res.length > 0) {
        const convertedRoutes = convertRoutes(res)
        setRoutes([...initRoutes, ...convertedRoutes])
      }
    })
  }, [])
  return { routes }
}
export default useRouteConfig
