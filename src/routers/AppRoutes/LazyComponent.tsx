import { lazy, ComponentType } from 'react'
// 路径映射函数
const ErrorComponent = () => <div>组件加载失败 </div>
// 创建懒加载组件映射
const lazyComponents: Record<string, ComponentType> = {}
function getLazyComponent(elePath: string): ComponentType {
  try {
    if (elePath.startsWith('./')) {
      const pageName = elePath.replace('./', '')
      if (!lazyComponents[elePath]) {
        lazyComponents[elePath] = lazy(() => import(`@/pages/${pageName}/index`))
      }
      return lazyComponents[elePath]
    }
    if (elePath.startsWith('@/')) {
      const componentPath = elePath.replace('@/', '')
      if (!lazyComponents[elePath]) {
        lazyComponents[elePath] = lazy(() => import(`@/${componentPath}/index`))
      }
      return lazyComponents[elePath]
    }
    if (!lazyComponents[elePath]) {
      lazyComponents[elePath] = lazy(() => import(`@/pages/${elePath}/index`))
    }
    return lazyComponents[elePath]
  } catch (error) {
    return ErrorComponent
  }
}
function LazyComponent({ elePath }: { elePath: string }) {
  const Component = getLazyComponent(elePath)
  return <Component />
}

export default LazyComponent
