import { routes as defaultRoutes } from '@/routers/index'
import { useRoutes } from 'react-router-dom'
import { Suspense, useState, useEffect } from 'react'
import RouteGuard from './RouteGuard'
import { Spin } from 'antd'
import routerCreatFun from '../convertMenusToRoutes'
import { routes as configRouters } from '../routes'
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
    const convertedRoutes = routerCreatFun(configRouters)
    console.log('convertedRoutes', convertedRoutes)
    setAsyncMenu(convertedRoutes)
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
