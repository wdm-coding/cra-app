import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '@/routers/AppRoutes'
import IndexedDBProvider from '@/pages/Provider/IndexedDBProvider'
import ErrorBoundary from '@/components/ErrorBoundary'
import { App as AntdApp } from 'antd'
import { useEffect } from 'react'
function App() {
  const { message } = AntdApp.useApp()
  useEffect(() => {
    window.$message = message
  }, [message])
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
const IndexApp = () => (
  <AntdApp className="h-full w-full">
    <App />
  </AntdApp>
)

export default IndexApp
