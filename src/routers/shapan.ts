import { RouteItem } from '@/routers/routes'

export const shapan: RouteItem[] = [
  {
    path: 'teacher',
    name: '沙盘教师端',
    icon: 'AreaChartOutlined',
    children:[
      {
        path: 'config',
        name: '沙盘教师端配置',
        element: './ShaPan/Teacher/Config'
      }
    ]
  }
]