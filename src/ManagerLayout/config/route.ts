import { RouteItem, routes as routesConfig } from '@/routers/routes'
import { MenuDataItem } from '@ant-design/pro-layout'
import * as Icons from '@ant-design/icons';
import React from 'react';
// 将菜单数据转换为 ProLayout 需要的路由格式
let authMap = {} as Record<string, string[]>
const convertRoutes = (routesData: RouteItem[], parentPath: string = ''): MenuDataItem[] => {
  return routesData.map((item: MenuDataItem) => {
    const currentPath = parentPath ? `${parentPath}/${item.path}` : item.path;
    const result: MenuDataItem = {
      name: item.name,
      path: `/manager/${currentPath}`
    }
    if (item.icon) {
      const IconComponent = Icons[item.icon as keyof typeof Icons] as React.ComponentType<any>;
      result.icon = React.createElement(IconComponent)
    }
    if (item.auth) {
      authMap = Object.assign({}, authMap, { [item.path as string]: item.auth });
    } else {
      authMap = Object.assign({}, authMap, { [item.path as string]: [] });
    }
    if (item.children && item.children.length > 0) {
      result.children = convertRoutes(item.children as RouteItem[], currentPath)
    }
    return result
  })
}
const getRouteConfig = (dynamicMenu: RouteItem[]): {
  routes: MenuDataItem[],
  authMap: Record<string, string[]>
} => {
  const managerList = routesConfig.find((item) => item.path === '/manager')?.children || []
  const afterFilterMenu = filterRoutes(dynamicMenu)
  const routes = convertRoutes([...managerList, ...afterFilterMenu])
  return { routes, authMap }
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
