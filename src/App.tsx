import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '@/routers/AppRoutes'
import IndexedDBProvider from '@/pages/Provider/IndexedDBProvider'
import { routes } from '@/routers/routes'
import ErrorBoundary from '@/components/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        {/* 提供IndexedDB缓存数据 */}
        <IndexedDBProvider>
          {/* 路由配置 */}
          <AppRoutes routers={routes} />
        </IndexedDBProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
