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
  const afterFilterMenu = filterRoutes(clientList)
  const routes = convertRoutes(afterFilterMenu)
  return { routes }
}
// 从dynamicMenu中递归筛选出hideInMenu为false的路由
const filterRoutes = (routes: RouteItem[]): RouteItem[] => {
  return routes
    .filter(item => !item.hideInMenu)
    .map(item => {
      // 创建一个新的对象副本，而不是修改原对象
      const newItem = { ...item };
      if (item.children && item.children.length > 0) {
        // 递归处理子项，并将结果赋值给新对象
        newItem.children = filterRoutes(item.children as RouteItem[]);
      }
      return newItem; // 返回新的、经过处理的对象
    });
}
export default getRouteConfig
