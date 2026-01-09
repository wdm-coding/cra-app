import React from 'react'
import { Outlet } from 'react-router-dom'
import { ProLayout } from '@ant-design/pro-layout'
import getRouteConfig from './config/route'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { Button } from 'antd'
import { useSelector } from 'react-redux'
import ScrollBar from '@/components/ScrollBar'
const ClientLayout: React.FC = () => {
  const { isLogin, userInfo } = useSelector((state: any) => state.user)
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div>
      <ProLayout
        actionsRender={() => {
          return (
            <div>
              <Button onClick={() => navigate('/manager')} type="text">
                前往管理端
              </Button>
              {isLogin ? (
                <span style={{ color: '#ff0000' }}>
                  欢迎，{userInfo.username}
                </span>
              ) : (
                <Button onClick={() => navigate('/login')} type="text">
                  登录
                </Button>
              )}
            </div>
          )
        }}
        avatarProps={
          isLogin
            ? {
                src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4'
              }
            : false
        }
        contentStyle={{ padding: 0 }}
        fixedHeader={true}
        footerRender={() => {
          return (
            <div
              style={{
                textAlign: 'center',
                height: 48,
                backgroundColor: '#000',
                lineHeight: '48px',
                color: '#fff'
              }}
            >
              建议使用Edge浏览器（79以上版本），Chrome浏览器（73.0以上版本），1440*900以上分辨率浏览本站
            </div>
          )
        }}
        layout="top"
        location={location}
        menu={{
          locale: false
        }}
        menuItemRender={(item, dom) => {
          if (!item.path) return dom
          return <Link to={item.path}>{dom}</Link>
        }}
        menuProps={{
          selectedKeys: [location.pathname]
        }}
        onMenuHeaderClick={() => navigate('/')}
        route={{
          ...getRouteConfig()
        }}
        title="客户端"
      >
        <ScrollBar
          alwaysShowTrack={true}
          autoHide={true}
          hideDelay={300}
          scrollbarColor="rgba(0, 0, 0, 0.3)"
          scrollbarHoverColor="rgba(0, 0, 0, 0.3)"
          scrollbarWidth={6}
          style={{ height: 'calc(100vh - 105px)' }}
        >
          <div style={{ height: '100%' }}>
            <Outlet />
          </div>
        </ScrollBar>
      </ProLayout>
    </div>
  )
}

export default ClientLayout
