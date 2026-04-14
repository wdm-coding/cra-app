import { Button, Card, Typography } from 'antd'
import { FileTextOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { userLogin } from '@/store/modules/userStore'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
const { Title, Text } = Typography
const CertLogin: React.FC = () => {
  const navigate = useNavigate()
  const state = useLocation().state
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch<any>()
  const onCertLogin = async () => {
    setLoading(true)
    try {
      const result: any = await dispatch(userLogin({ type: 'cert', loginParams: {} })).unwrap()
      setLoading(false)
      window.$message.success('登录成功')
      result && navigate(state?.from || '/', { replace: true })
    } catch (error) {
      setLoading(false)
      const { message } = error as any
      throw new Error(message)
    }
  }
  return (
    <div>
      <Title level={3}>证书登录</Title>
      <Text type="secondary">请使用客户端证书完成身份验证</Text>
      <Card style={{ borderRadius: 8, marginTop: 0 }}>
        <div style={{ alignItems: 'center', display: 'flex', marginBottom: 16 }}>
          <FileTextOutlined style={{ color: '#faad14', fontSize: 24, marginRight: 8 }} />
          <Title level={4} style={{ margin: 0 }}>
            登录须知
          </Title>
        </div>
        <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
          <li>
            请先安装{' '}
            <Text strong style={{ color: '#1890ff' }}>
              个人证书（.pfx/.p12）
            </Text>
          </li>
          <li>
            点击登录后弹出{' '}
            <Text strong style={{ color: '#1890ff' }}>
              证书选择框
            </Text>
          </li>
          <li>选择证书即可完成安全登录</li>
          <li>已吊销证书无法登录</li>
        </ul>
      </Card>
      <Button
        block
        loading={loading}
        onClick={onCertLogin}
        size="large"
        style={{ marginTop: 12 }}
        type="primary"
      >
        证书登录
      </Button>
    </div>
  )
}
export default CertLogin
