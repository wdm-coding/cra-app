import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '@/routers/AppRoutes'
import IndexedDBProvider from '@/pages/Provider/IndexedDBProvider'
import ErrorBoundary from '@/components/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        {/* 提供IndexedDB缓存数据 */}
        <IndexedDBProvider>
          {/* 路由配置 */}
          <AppRoutes />
        </IndexedDBProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
