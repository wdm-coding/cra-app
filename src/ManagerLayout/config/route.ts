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
const getRouteConfig = (dynamicMenu: any[]): {
  routes: MenuDataItem[],
  authMap: Record<string, string[]>
} => {
  const managerList = routesConfig.find((item) => item.path === '/manager')?.children || []
  const routes = convertRoutes([...managerList, ...dynamicMenu as any[]])
  return { routes, authMap }
}
export default getRouteConfig
