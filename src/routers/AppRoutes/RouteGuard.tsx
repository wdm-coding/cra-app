import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useMemo, useEffect } from 'react'
// 路由白名单
const whiteList = ['/', '/client', '/login', '/403', '/404']
// 路由守卫组件
const RouteGuard = ({ children }: { children: React.ReactNode }) => {
  const loginStatus = useSelector((state: any) => state.user.isLogin)
  const { pathname, state } = useLocation()
  const navigate = useNavigate()
  // 检查是否需要重定向
  const needRedirect = useMemo(() => {
    // 1. 未登录且不在白名单
    if (!loginStatus && !whiteList.includes(pathname)) {
      return {
        loginStatus,
        pathname,
        redirect: true,
        to: '/login',
        state: { ...state, from: pathname },
        type: '1未登录且不在白名单'
      }
    }
    // 2. 已登录但访问登录页
    if (loginStatus && pathname === '/login') {
      return {
        loginStatus,
        pathname,
        redirect: true,
        to: (state as any)?.from || '/',
        state,
        type: '2已登录但访问登录页'
      }
    }
    // 3. 其他情况不重定向
    return { loginStatus, pathname, redirect: false, to: pathname, state, type: '3其他情况不重定向' }
  }, [pathname, loginStatus, state])
  // 执行重定向
  useEffect(() => {}, [needRedirect, navigate])
  if (needRedirect.redirect) {
    return <Navigate replace state={needRedirect.state} to={needRedirect.to} />
  }
  return <>{children}</>
}

export default RouteGuard
