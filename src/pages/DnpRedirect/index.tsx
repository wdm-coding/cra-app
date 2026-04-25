import { createFetchToken } from 'dnp-client'
import { useEffect } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Flex, Spin } from 'antd'

// const App: React.FC = () => (
//   <Flex align="center" gap="medium">
//     <Spin indicator={<LoadingOutlined spin />} size="small" />
//     <Spin indicator={<LoadingOutlined spin />} />
//     <Spin indicator={<LoadingOutlined spin />} size="large" />
//     <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
//   </Flex>
// );
function getUrlParam(paramName: any) {
  // 从URL搜索参数中获取 (?uuid=xxx#/path)
  const urlParams = new URLSearchParams(window.location.search)
  const valueFromUrl = urlParams.get(paramName)

  // 从哈希路由查询中获取 (#/path?uuid=xxx)
  let valueFromQuery = null
  const { hash } = window.location
  if (hash.includes('?')) {
    const hashQuery = hash.split('?')[1]
    const hashParams = new URLSearchParams(hashQuery)
    valueFromQuery = hashParams.get(paramName)
  }

  // 优先返回URL搜索参数中的值，如果没有则返回哈希查询中的值
  const value = valueFromUrl || valueFromQuery

  return {
    value,
    fromUrl: !!valueFromUrl,
    fromQuery: !!valueFromQuery
  }
}

const DnpRedirect = () => {
  const onGetDnpToken = async () => {
    const res: any = getUrlParam('uuid')
    console.log(res)
    if (res && res.value) {
      try {
        const dnpIns = createFetchToken()
        const token = await dnpIns.fetchToken(res.value)
        if (token) {
          console.log('登录成功', token)
        }
      } catch (e) {
        console.log('登录失败', e)
      }
    } else {
      console.log('登录失败，uuid不存在')
    }
  }
  useEffect(() => {
    onGetDnpToken()
  }, [])
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Spin indicator={<LoadingOutlined spin style={{ fontSize: 48 }} />} />
    </div>
  )
}

export default DnpRedirect
