import { Spin } from 'antd'
const Fallback = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Spin />
      <span style={{ color: '#000', paddingLeft: '20px' }}>加载中···</span>
    </div>
  )
}

export default Fallback
