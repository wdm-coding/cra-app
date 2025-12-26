import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useMemo, useEffect } from 'react'
// 路由白名单
const whiteList = ['/', '/client', '/login', '/403', '/404']
// 路由守卫组件
const RouteGuard = ({ children }: { children: React.ReactNode }) => {
  const loginStatus = useSelector((state: any) => state.user.isLogin)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  // 检查是否需要重定向
  const needRedirect = useMemo(() => {
    // 1. 未登录且不在白名单
    if (!loginStatus && !whiteList.includes(pathname)) {
      return {
        type: 1,
        redirect: true,
        to: '/login',
        state: { from: pathname }
      }
    }
    // 2. 已登录但访问登录页
    if (loginStatus && pathname === '/login') {
      return {
        type: 2,
        redirect: false,
        to: -1, // 使用 -1 表示回退到上一个页面
        state: null
      }
    }
    // 3. 其他情况不重定向
    return { type: 3, redirect: false, to: pathname, state: null }
  }, [pathname, loginStatus])
  // 执行重定向
  useEffect(() => {
    switch (needRedirect.type) {
      case 1:
        navigate(needRedirect.to as string, { replace: true, state: needRedirect.state })
        break
      case 2:
        navigate(-1)
        break
      default:
        break
    }
  }, [needRedirect, navigate])
  return <>{needRedirect.type !== 3 ? null : children}</>
}

export default RouteGuard
