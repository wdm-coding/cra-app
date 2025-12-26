import { lazy } from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'
import ManagerLayout from '@/ManagerLayout/index'
import ClientLayout from '@/ClientLayout'
const Home = lazy(() => import('@/pages/Home'))
const Redirect = lazy(() => import('@/pages/Redirect'))
const ReduxStore = lazy(() => import('@/pages/ReduxStore'))
const Login = lazy(() => import('@/pages/Login'))
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Redirect />
  },
  {
    path: '/manager',
    element: <ManagerLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'reduxStore',
        element: <ReduxStore />
      }
    ]
  },
  {
    path: '/client',
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'reduxStore',
        element: <ReduxStore />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <div>404</div>
  }
]

export const router = createBrowserRouter(routes)
