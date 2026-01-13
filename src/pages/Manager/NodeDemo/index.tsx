import Api from '@/api/nodeApi'
import { Button } from 'antd'
const NodeDemo = () => {
  const onApi = async (type: string) => {
    switch (type) {
      case 'get/':
        await Api.index()
        break
      case 'get':
        await Api.getUser({ id: 1 })
        break
      case 'post':
        await Api.setUser({ name: '张三', age: 18 })
        break
      default:
        break
    }
  }
  return (
    <div>
      <div className="flex w-[200px] justify-between mb-[20px]">
        <span>首页请求</span>
        <Button onClick={() => onApi('get/')} type="primary">
          发送
        </Button>
      </div>
      <div className="flex w-[200px] justify-between mb-[20px]">
        <span>get请求</span>
        <Button onClick={() => onApi('get')} type="primary">
          发送
        </Button>
      </div>
      <div className="flex w-[200px] justify-between">
        <span>post请求</span>
        <Button onClick={() => onApi('post')} type="primary">
          发送
        </Button>
      </div>
    </div>
  )
}

export default NodeDemo
