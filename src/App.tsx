import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '@/routers/AppRoutes'
import IndexedDBProvider from '@/pages/Provider/IndexedDBProvider'
import { routes } from '@/routers/routes'
function App() {
  return (
    <BrowserRouter>
      {/* 提供IndexedDB缓存数据 */}
      <IndexedDBProvider>
        {/* 路由配置 */}
        <AppRoutes routers={routes} />
      </IndexedDBProvider>
    </BrowserRouter>
  )
}

export default App
