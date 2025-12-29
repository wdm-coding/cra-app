import { routes as defaultRoutes } from '@/routers/index'
import { useRoutes, RouteObject } from 'react-router-dom'
import { Suspense, useState, useEffect } from 'react'
import { getServerMenuData } from '@/routers/AppRoutes/asyncRoutes'
import { lazy } from 'react'
import RouteGuard from './RouteGuard'
import { Spin } from 'antd'
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
const Fallback = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Spin />
      <span style={{ color: '#000', paddingLeft: '20px' }}>加载中···</span>
    </div>
  )
}
// AppRoutes组件，用于渲染路由和动态加载菜单数据
const AppRoutes = () => {
  const [asyncMenu, setAsyncMenu] = useState(defaultRoutes)
  useEffect(() => {
    getServerMenuData().then((res: any) => {
      if (res.length > 0) {
        const newMenu = [...defaultRoutes]
        newMenu.forEach((item) => {
          // 只在管理端布局下添加异步路由
          if (item.path === '/manager') {
            const convertedRoutes = convertMenusToRoutes(res)
            item.children = [...(item.children as []), ...convertedRoutes]
          }
        })
        setAsyncMenu(newMenu)
      }
    })
  }, [])
  // 动态路由加载
  const routes = useRoutes(asyncMenu)
  // 渲染路由组件
  return (
    <RouteGuard>
      <Suspense fallback={<Fallback />}>{routes}</Suspense>
    </RouteGuard>
  )
}

export default AppRoutes
