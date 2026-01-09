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
    redirect: '/client',
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
        element: './Client/Home',
      }
    ]
  },
  {
    path: '/manager',
    element: '@/ManagerLayout',
    children: [
      {
        path: 'dashboard',
        name: '数据看板',
        element: './Manager/Dashboard',
        icon: 'AreaChartOutlined'
      },
      {
        path: 'accessDemo',
        name: '权限示例',
        element: './Manager/AccessDemo',
        icon: 'ShareAltOutlined',
        auth: ['add', 'delete']
      },
      {
        path: 'curdDemo',
        name: '增删改查示例',
        element: './Manager/CurdDemo',
        icon: 'BarChartOutlined',
        auth: ['add', 'update']
      }
    ]
  }
]
export const fatchMenus: RouteItem[] = [
  {
    path: 'uploadDemo',
    name: '上传示例',
    element: './Manager/UploadDemo'
  },
  {
    path: 'AsyncPages',
    name: '嵌套菜单',
    children: [
      {
        path: 'asyncDemo1',
        name: '下载base64图片',
        element: './Manager/AsyncPages/AsyncPagesOne'
      },
      {
        path: 'asyncDemo2',
        name: '子菜单2',
        children: [
          {
            path: 'asyncDemo21',
            name: '子菜单2-1',
            element: './Manager/AsyncPages/AsyncChildrenPages/AsyncChildrenOne'
          },
          {
            path: 'asyncDemo22',
            name: '子菜单2-2',
            element: './Manager/AsyncPages/AsyncChildrenPages/AsyncChildrenTwo'
          }
        ]
      }
    ]
  },
  {
    path: 'functionNode',
    name: '功能节点',
    children: [
      {
        path: 'mainInfo',
        name: '主体信息展示',
        element: './Manager/FunctionNode/MainInfo'
      }
    ]
  }
]