import { Button, Form, Input, Typography } from 'antd'
import { useDispatch } from 'react-redux'
import { userLogin } from '@/store/modules/userStore'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
const { Title, Text } = Typography
type FieldType = {
  account: string
  password: string
}
const AccountLogin: React.FC = () => {
  const navigate = useNavigate()
  const state = useLocation().state
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch<any>()
  const onFinish = async (values: any) => {
    setLoading(true)
    try {
      const result: any = await dispatch(userLogin({ type: 'account', loginParams: values })).unwrap()
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
      <Title level={3}>账号密码登录</Title>
      <Text type="secondary">请输入您的账号和密码完成登录</Text>
      <div className="flex items-center" style={{ position: 'relative', marginTop: 24 }}>
        <Form
          autoComplete="off"
          initialValues={{ remember: true }}
          labelCol={{ span: 4 }}
          name="login"
          onFinish={onFinish}
          style={{ width: '100%' }}
          wrapperCol={{ span: 20 }}
        >
          <Form.Item<FieldType> label="账号" name="account" rules={[{ required: true, message: '请输入账号!' }]}>
            <Input placeholder="请输入账号" />
          </Form.Item>

          <Form.Item<FieldType> label="密码" name="password" rules={[{ required: true, message: '请输入密码!' }]}>
            <Input.Password placeholder="请输入密码" />
          </Form.Item>

          <Form.Item label={null}>
            <Button htmlType="submit" loading={loading} style={{ width: '100%' }} type="primary">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
export default AccountLogin
