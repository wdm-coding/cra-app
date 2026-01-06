import { RouteItem } from '../routes'
import { useRoutes, RouteObject, Navigate } from 'react-router-dom'
import { useCallback, useMemo } from 'react'
import RouteGuard from './RouteGuard'
import LazyComponent from './LazyComponent'
import NotFound from '@/pages/NotFound'
import { getDynamicMenu } from '@/store/modules/userStore'
import { useSelector } from 'react-redux'
import { routes as routesMenu } from '@/routers/routes'
// AppRoutes组件，用于渲染路由和动态加载菜单数据
const AppRoutes = () => {
  const dynamicMenu = useSelector(getDynamicMenu)
  // 转换函数
  const convertMenusToRoutes = useCallback((menuData: RouteItem[]): RouteObject[] => {
    return menuData.map((item: RouteItem) => {
      const routeItem: RouteObject = {
        path: item.path
      }
      if (item.redirect) {
        routeItem.element = <Navigate to={item.redirect} />
      }
      if (item.element) {
        routeItem.element = <LazyComponent elePath={item.element} />
      }
      if (item.children && item.children.length > 0) {
        routeItem.children = [
          {
            index: true,
            element: <Navigate to={item.children[0].path} />
          },
          ...convertMenusToRoutes(item.children)
        ]
      }

      return routeItem
    })
  }, [])
  const patchClientRoutes = useCallback(() => {
    const allMenus = []
    let managerChildren = null
    const otherMenus = routesMenu.filter((item) => item.path !== '/manager')
    allMenus.push(...otherMenus)
    routesMenu.forEach((item) => {
      if (item.path === '/manager') {
        managerChildren = {
          ...item,
          children: [...(item.children as []), ...dynamicMenu]
        }
        allMenus.push(managerChildren)
      }
    })
    return allMenus
  }, [dynamicMenu])
  // 转换菜单数据为路由配置
  const routesConfig = useMemo(() => {
    const all = patchClientRoutes()
    const result = convertMenusToRoutes(all)
    return result
  }, [convertMenusToRoutes, patchClientRoutes])
  // 使用useRoutes渲染路由组件
  const routes = useRoutes([...routesConfig, { path: '*', element: <NotFound /> }])
  // 渲染路由组件
  return <RouteGuard>{routes}</RouteGuard>
}

export default AppRoutes
