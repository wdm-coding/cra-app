import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ProLayout, PageContainer } from '@ant-design/pro-components'
import { Link } from 'react-router-dom'
import logo from '@/assets/images/ai-avator.png'
import getRouteConfig from './config/route'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { userLogout, setPageAuth } from '@/store/modules/userStore'
import styles from './index.less'
import React, { useEffect, useState } from 'react'
import ScrollBar from '@/components/ScrollBar'
const ManagerLayout: React.FC = () => {
  const [routes, setRoutes] = useState([])
  const dispatch = useDispatch<any>()
  const navigate = useNavigate()
  const location = useLocation()
  // 存储当前路由的权限信息
  useEffect(() => {
    const { routes: routeList, authMap } = getRouteConfig()
    setRoutes(routeList as [])
    dispatch(setPageAuth(authMap))
  }, [dispatch])
  // 返回客户端逻辑
  const onBackClient = () => {
    navigate('/', { replace: true })
  }
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
    <ProLayout
      actionsRender={() => {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ color: '#fff' }}>
              <div className={styles.title}>欢迎来到管理端</div>
            </div>
            <Button onClick={onBackClient} style={{ color: '#fff' }} type="text">
              返回客户端
            </Button>
            <Button onClick={onLogout} style={{ color: '#fff' }} type="text">
              退出登录
            </Button>
          </div>
        )
      }}
      avatarProps={{ icon: <img alt="avatar" src={logo} /> }}
      contentStyle={{ padding: 0, height: 'calc(100vh - 56px)', backgroundColor: 'rgb(240, 240, 240)' }}
      fixedHeader={true}
      layout="mix"
      location={location}
      logo={logo}
      menuItemRender={(item, dom) => {
        if (!item.path) return dom
        return <Link to={item.path}>{dom}</Link>
      }}
      menuProps={{
        selectedKeys: [location.pathname]
      }}
      route={{
        routes
      }}
      title="管理端"
      token={{
        header: {
          colorBgHeader: '#1959FF',
          colorHeaderTitle: '#fff'
        },
        sider: {
          colorBgMenuItemSelected: 'transparent',
          colorBgMenuItemHover: 'transparent',
          colorBgMenuItemActive: 'transparent',
          colorTextMenuSelected: '#1959FF',
          colorTextMenuActive: '#1959FF',
          colorTextMenuItemHover: '#000'
        },
        pageContainer: {
          colorBgPageContainer: '#ffffff'
        }
      }}
    >
      <PageContainer
        children={false}
        className={styles.managerPageContainer}
        extraContent={false}
        header={{
          title: '',
          extra: false,
          style: {
            padding: 0,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#ffffff'
          },
          // 自定义配置
          children: (
            <ScrollBar
              alwaysShowTrack={true}
              autoHide={true}
              hideDelay={300}
              scrollbarColor="rgba(0, 0, 0, 0.3)"
              scrollbarHoverColor="rgba(0, 0, 0, 0.3)"
              scrollbarWidth={6}
              style={{ height: '100%' }}
            >
              <div style={{ padding: '20px', backgroundColor: '#f1f1f1' }}>
                <Outlet />
              </div>
            </ScrollBar>
          )
        }}
        style={{ padding: 0, height: '100%' }}
      />
    </ProLayout>
  )
}

export default ManagerLayout
