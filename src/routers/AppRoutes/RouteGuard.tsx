import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useMemo, useEffect, useRef } from 'react'
import FallbackLoading from '@/components/FallbackLoading'
// 路由白名单
const whiteList = ['/', '/client', '/login', '/403', '/404', '/client/home']
const NavigeteBack = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(-1)
  }, [navigate])
  return <></>
}
// 路由守卫组件
const RouteGuard = ({ children }: { children: React.ReactNode }) => {
  const loginStatus = useSelector((state: any) => state.user.isLogin)
  const { pathname, state } = useLocation()
  const navigate = useNavigate()
  const loginRef = useRef(loginStatus)
  // 检查是否需要重定向
  const needRedirect = useMemo(() => {
    const preLoginStatus = loginRef.current
    const currentLoginStatus = loginStatus
    loginRef.current = currentLoginStatus
    // 1. 未登录且不在白名单
    if (!loginStatus && !whiteList.includes(pathname)) {
      return {
        to: '/login',
        state: { ...state, from: pathname },
        type: '1未登录且不在白名单',
        nextType: 1
      }
    }
    // 2. 已登录但访问登录页
    if (loginStatus && pathname === '/login') {
      return {
        type: '已登录但访问登录页',
        state: { ...state, from: pathname },
        nextType: !preLoginStatus && currentLoginStatus ? 4 : 2
      }
    }
    // 3. 其他情况不重定向
    return { to: pathname, state, type: '3其他情况不重定向', nextType: 3 }
  }, [pathname, loginStatus, state])
  // 执行重定向
  useEffect(() => {}, [needRedirect, navigate])
  switch (needRedirect.nextType) {
    case 1:
      return <Navigate replace state={needRedirect.state} to={needRedirect.to!} />
    case 2:
      return <NavigeteBack />
    case 4:
      return <FallbackLoading />
    default:
      return <>{children}</>
  }
}

export default RouteGuard
