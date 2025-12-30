import { RouteItem, routes as routesConfig } from '@/routers/routes'
import { MenuDataItem } from '@ant-design/pro-layout'
// 将菜单数据转换为 ProLayout 需要的路由格式
const convertRoutes = (routesData: RouteItem[]): MenuDataItem[] => {
  return routesData.map((item: MenuDataItem) => {
    const result: MenuDataItem = {
      name: item.name,
      path: `/client/${item.path}`
    }
    if (item.children && item.children.length > 0) {
      result.children = convertRoutes(item.children as RouteItem[])
    }
    return result
  })
}
const getRouteConfig = () => {
  const clientList = routesConfig.find((item) => item.path === '/client')?.children || []
  const routes = convertRoutes(clientList)
  return { routes }
}
export default getRouteConfig
