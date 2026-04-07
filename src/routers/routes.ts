export interface RouteItem {
  name?: string
  path: string
  redirect?: string | null
  element?: string
  children?: RouteItem[],
  icon?: string
  auth?: string[]
  hideInMenu?: boolean
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
      },
      {
        path: 'annualDisclosure',
        name: '信息披露',
        element: './Client/AnnualDisclosure',
      },
      {
        path: 'annualDisclosure/detail',
        name: '信息披露详情',
        element: './Client/AnnualDisclosure/Detail',
        hideInMenu: true,
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
      },
      {
        path: 'nodeDemo',
        name: 'NodeApi测试',
        element: './Manager/NodeDemo',
        icon: 'BarChartOutlined'
      }
    ]
  }
]
export const fatchMenus: RouteItem[] = [
  {
    path: 'ProComponents',
    name: 'ProAntd组件库',
    icon: 'AreaChartOutlined',
    children: [
      {
        path: 'editableProTable',
        name: 'EditableProTable',
        element: './Manager/ProComponents/EditableProTable'
      }
    ]
  },
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
      },
      {
        path: 'certLogin',
        name: '证书登录',
        element: './Manager/FunctionNode/CertLogin'
      }
    ]
  },
  {
    path: 'registerPlatform',
    name: "登记平台",
    children: [
      {
        path: 'annualDisclosure',
        name: '年度信息披露管理',
        children: [
          {
            path: 'implementOrg',
            name: '实施机构',
            element: './Manager/RegisterPlatform/AnnualDisclosure/ImplementOrg'
          },
          {
            path: 'implementOrgForm',
            name: '实施机构表单',
            element: './Manager/RegisterPlatform/AnnualDisclosure/ImplementOrg/ImplementOrgForm',
            hideInMenu: true
          },
          {
            path: 'ImplementOrgDetail',
            name: '实施机构详情',
            element: './Manager/RegisterPlatform/AnnualDisclosure/ImplementOrg/ImplementOrgDetail',
            hideInMenu: true
          },
          {
            path: 'operationOrg',
            name: '运营机构',
            element: './Manager/RegisterPlatform/AnnualDisclosure/OperationOrg'
          },
          {
            path: 'operationOrgForm',
            name: '运营机构表单',
            element: './Manager/RegisterPlatform/AnnualDisclosure/OperationOrg/OperationOrgForm',
            hideInMenu: true
          },
          {
            path: 'operationOrgDetail',
            name: '运营机构详情',
            element: './Manager/RegisterPlatform/AnnualDisclosure/OperationOrg/OperationOrgDetail',
            hideInMenu: true
          }
        ]
      }
    ]
  }
]