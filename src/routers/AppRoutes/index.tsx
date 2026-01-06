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
        const children = item.children.slice(1)
        routeItem.children = [
          {
            index: true,
            element: <LazyComponent elePath={item.children[0].element as string} />
          },
          ...convertMenusToRoutes(children)
        ]
      }

      return routeItem
    })
  }, [])
  // 转换菜单数据为路由配置
  const routesConfig = useMemo(() => {
    const result = convertMenusToRoutes(routesMenu)
    console.log('routesConfig', result)
    return result
  }, [convertMenusToRoutes])
  // 使用useRoutes渲染路由组件
  const routes = useRoutes([...routesConfig, { path: '*', element: <NotFound /> }])
  // 渲染路由组件
  return <RouteGuard>{routes}</RouteGuard>
}

export default AppRoutes
