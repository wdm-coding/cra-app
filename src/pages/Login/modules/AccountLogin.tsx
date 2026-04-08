import { Button, Form, Input, Typography } from 'antd'
const { Title, Text } = Typography
type FieldType = {
  username?: string
  password?: string
}
const AccountLogin: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(values)
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
          <Form.Item<FieldType> label="账号" name="username" rules={[{ required: true, message: '请输入账号!' }]}>
            <Input />
          </Form.Item>

          <Form.Item<FieldType> label="密码" name="password" rules={[{ required: true, message: '请输入密码!' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item label={null}>
            <Button htmlType="submit" style={{ width: '100%' }} type="primary">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
export default AccountLogin
