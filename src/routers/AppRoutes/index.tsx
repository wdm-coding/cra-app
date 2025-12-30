import { routes as defaultRoutes } from '@/routers/index'
import { useRoutes, RouteObject } from 'react-router-dom'
import { Suspense, useState, useEffect, useMemo } from 'react'
import { getServerMenuData } from '@/routers/AppRoutes/asyncRoutes'
import { lazy } from 'react'
import RouteGuard from './RouteGuard'
import Fallback from './Fallback'
// 转换函数
const convertMenusToRoutes = (menuData: any[], parentElePath: string = ''): RouteObject[] => {
  return menuData.map((item) => {
    const currentPath = `${parentElePath}/${item.element}`
    const LazyComponent = lazy(async () => {
      try {
        // 动态导入pages/AsyncPages目录下所有的index.tsx文件
        const component = await import(`@/pages/AsyncPages${currentPath}`)
        return component
      } catch (error) {
        // 返回一个错误边界组件
        const ErrorComponent = () => <div>组件加载失败</div>
        return { default: ErrorComponent }
      }
    })
    if (item.children && item.children.length > 0) {
      return {
        children: convertMenusToRoutes(item.children, currentPath)
      }
    } else {
      return {
        path: '/manager' + item.path,
        element: <LazyComponent />
      }
    }
  })
}
// AppRoutes组件，用于渲染路由和动态加载菜单数据
const AppRoutes = () => {
  const routesConfig = useMemo(() => {
    return [
      {
        path: '/',
        element: <div>重定向</div>
      },
      {
        path: '/home',
        element: <div>首页</div>
      }
    ]
  }, [])
  // 动态路由加载
  const routes = useRoutes(routesConfig)
  // 渲染路由组件
  return (
    <RouteGuard>
      <Suspense fallback={<Fallback />}>{routes}</Suspense>
    </RouteGuard>
  )
}

export default AppRoutes
