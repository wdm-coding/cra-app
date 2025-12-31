import { Button } from 'antd'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img alt="404" className="w-[300px]" src={require('@/assets/images/error/404.png')} />
      <span
        className="text-2xl p-[45px]"
        style={{
          fontFamily: 'AlimamaShuHeiTi',
          color: '#17A6FF',
          fontWeight: 'bold'
        }}
      >
        抱歉，您访问的页面不存在！
      </span>
      <Button style={{ backgroundColor: '#006CD1', color: '#fff' }}>
        <Link to="/">返回首页</Link>
      </Button>
    </div>
  )
}

export default NotFound
