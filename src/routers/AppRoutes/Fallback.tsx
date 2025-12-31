import { Spin } from 'antd'
const Fallback = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: 'calc(100vh - 100px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Spin size="large" />
    </div>
  )
}

export default Fallback
