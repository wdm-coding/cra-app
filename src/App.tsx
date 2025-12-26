import { RouterProvider, BrowserRouter } from 'react-router-dom'
import { router } from '@/routers'
import { Suspense } from 'react'
import AppRoutes from '@/routers/AppRoutes'
import IndexedDBProvider from '@/pages/Provider/IndexedDBProvider'
function App() {
  return (
    <div className="App">
      <Suspense fallback="加载中">
        <RouterProvider router={router} />
      </Suspense>
    </div>
  )
}

function AsyncApp() {
  return (
    <BrowserRouter>
      <IndexedDBProvider>
        <AppRoutes />
      </IndexedDBProvider>
    </BrowserRouter>
  )
}

export default AsyncApp
