export interface RouteItem {
  name?: string
  path: string
  redirect?: string | null
  element?: string
  children?: RouteItem[],
  icon?: string
  auth?: string[]
}

export const routes: RouteItem[] = [
  {
    path: '/',
    element: './Redirect',
  },
  {
    path: '/login',
    element: './Login'
  },
  {
    path: '/client',
    element: '@/ClientLayout',
    children: [
      {
        path: 'home',
        name: '客户端首页',
        element: './Home'
      },
      {
        path: 'reduxStore',
        name: '数据管理',
        element: './ReduxStore'
      }
    ]
  },
  {
    path: '/manager',
    element: '@/ManagerLayout',
    children: [
      {
        path: 'home',
        name: '管理端首页',
        element: './Home',
        icon: 'AreaChartOutlined',
        auth: ['add', 'delete', 'update']
      },
      {
        path: 'accessDemo',
        name: '权限示例',
        element: './AsyncPages/AccessDemo',
        icon: 'ShareAltOutlined',
        auth: ['add', 'delete']
      },
      {
        path: 'curdDemo',
        name: '增删改查示例',
        element: './AsyncPages/CurdDemo',
        icon: 'BarChartOutlined',
        auth: ['add', 'update']
      }
    ]
  }
]