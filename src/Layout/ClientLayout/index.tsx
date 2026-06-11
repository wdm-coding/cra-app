import React from 'react'
import { Outlet } from 'react-router-dom'
import { LogoutOutlined } from '@ant-design/icons'
import { ProLayout } from '@ant-design/pro-layout'
import getRouteConfig from './config/route'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { Button, Dropdown } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '@/store/modules/userStore'
import ScrollBar from '@/components/ScrollBar'
const ClientLayout: React.FC = () => {
  const { isLogin, userInfo } = useSelector((state: any) => state.user)
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch<any>()
  // 退出登录逻辑
  const onLogout = async () => {
    try {
      const result: any = await dispatch(userLogout()).unwrap()
      result && navigate('/', { replace: true })
    } catch (error) {
      const { message } = error as any
      console.log('登出失败message', message)
    }
  }
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
                <span style={{ color: '#ff0000' }}>欢迎，{userInfo.username}</span>
              ) : (
                <Button onClick={() => navigate('/login')} style={{ color: '#1677ff' }} type="text">
                  去登录
                </Button>
              )}
            </div>
          )
        }}
        avatarProps={
          isLogin
            ? {
                src: '/imgs/xz-avator.jpeg',
                render: (_, defaultDom) => {
                  return (
                    <Dropdown
                      menu={{
                        items: [
                          {
                            key: 'logout',
                            icon: <LogoutOutlined />,
                            label: '退出登录',
                            onClick: () => onLogout()
                          }
                        ]
                      }}
                      placement="bottomCenter"
                    >
                      {defaultDom}
                    </Dropdown>
                  )
                }
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
