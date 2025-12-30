import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '@/routers/AppRoutes'
import IndexedDBProvider from '@/pages/Provider/IndexedDBProvider'
function App() {
  return (
    <BrowserRouter>
      {/* 提供IndexedDB缓存数据 */}
      <IndexedDBProvider>
        {/* 路由配置 */}
        <AppRoutes />
      </IndexedDBProvider>
    </BrowserRouter>
  )
}

export default App
