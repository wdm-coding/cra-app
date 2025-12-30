import { RouteItem } from './routes'
import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
// 路径映射函数
const ErrorComponent = () => <div>组件加载失败 </div>
function resolveComponentPath(elePath: string): () => Promise<any> {
  if (elePath.startsWith('./')) {
    const pageName = elePath.replace('./', '')
    return () =>
      import(`@/pages/${pageName}/index`).catch(() => ({
        default: ErrorComponent
      }))
  }
  if (elePath.startsWith('@/')) {
    const componentPath = elePath.replace('@/', '')
    return () =>
      import(`@/${componentPath}`).catch(() => ({
        default: ErrorComponent
      }))
  }
  // 默认处理
  return () =>
    import(`@/pages/${elePath}`).catch(() => ({
      default: ErrorComponent
    }))
}
function convertMenusToRoutes(menuData: RouteItem[]): any {
  return menuData.map((item: RouteItem) => {
    const routeObj: RouteObject = {
      path: item.path
    }
    if (item.element) {
      try {
        const componentLoader = resolveComponentPath(item.element)
        const LazyComponent = lazy(componentLoader)
        routeObj.element = <LazyComponent />
      } catch (error) {
        routeObj.element = <ErrorComponent />
      }
    }
    if (item.children) {
      routeObj.children = convertMenusToRoutes(item.children)
    }
    return routeObj
  })
}

export default convertMenusToRoutes
