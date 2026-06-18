import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '@/routers/AppRoutes'
import IndexedDBProvider from '@/pages/Provider/IndexedDBProvider'
import ErrorBoundary from '@/components/ErrorBoundary'
import { App as AntdApp, ConfigProvider } from 'antd'
import { useEffect } from 'react'
import zhCN from 'antd/locale/zh_CN';
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
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </AntdApp>
)

export default IndexApp
