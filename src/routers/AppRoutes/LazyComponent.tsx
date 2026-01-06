import { lazy, Suspense } from 'react'
import FallbackLoading from '@/components/FallbackLoading'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
// 路径映射函数
const ErrorComponent = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img alt="404" className="w-[300px]" src={require('@/assets/images/error/loadFail.png')} />
      <span
        className="text-2xl p-[15px]"
        style={{
          fontFamily: 'AlimamaShuHeiTi',
          color: '#17A6FF',
          fontWeight: 'bold'
        }}
      >
        组件加载失败
      </span>
      <Button onClick={() => navigate(-1)} style={{ backgroundColor: '#006CD1', color: '#fff' }}>
        返回
      </Button>
    </div>
  )
}
function LazyComponent({ elePath }: { elePath: string }) {
  const LazyComp = lazy(async () => {
    try {
      if (elePath?.startsWith('./')) {
        const pageName = elePath.replace('./', '')
        const comp = await import(`@/pages/${pageName}/index`)
        return comp
      }
      if (elePath?.startsWith('@/')) {
        const pageName = elePath.replace('@/', '')
        const comp = await import(`@/${pageName}/index`)
        return comp
      }
      const comp = await import(`@/${elePath}/index`)
      return comp
    } catch {
      return { default: ErrorComponent }
    }
  })
  return (
    <Suspense fallback={<FallbackLoading />}>
      <LazyComp />
    </Suspense>
  )
}

export default LazyComponent
