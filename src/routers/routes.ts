export interface RouteItem {
  name?: string
  path: string
  redirect?: string | null
  element?: string
  children?: RouteItem[]
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
        element: './Home'
      },
      {
        path: 'reduxStore',
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
        element: './Home'
      },
      {
        path: 'reduxStore',
        element: './ReduxStore'
      }
    ]
  }
]