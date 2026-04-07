import { Form, Input, Button, Card, Typography } from 'antd'
import { useState } from 'react'
import { FileTextOutlined } from '@ant-design/icons'
import classnames from 'classnames'
import styles from './index.less'
const { Title, Text } = Typography

const CertLogin: React.FC = () => {
  const [activeKey, setActiveKey] = useState('account')

  // 账号密码登录表单提交
  const onAccountFinish = (values: { username: string; password: string }) => {
    console.log('账号密码登录:', values)
  }

  // 证书登录
  const onCertLogin = () => {
    console.log('证书登录')
  }

  // 账号密码登录 Tab 内容
  const AccountLoginContent = (
    <div style={{ padding: '40px 0' }}>
      <Title level={3}>账号密码登录</Title>
      <Text type="secondary">请输入您的账号和密码完成登录</Text>
      <Form
        name="accountLogin"
        onFinish={onAccountFinish}
        size="large"
        style={{ marginTop: 32, maxWidth: 400 }}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入账号' }]}
        >
          <Input placeholder="请输入账号" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password placeholder="请输入密码" />
        </Form.Item>
        <Form.Item>
          <Button block htmlType="submit" type="primary">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )

  // 证书登录 Tab 内容
  const CertLoginContent = (
    <div style={{ padding: '40px 0' }}>
      <Title level={3}>证书登录</Title>
      <Text type="secondary">请使用客户端证书完成身份验证</Text>
      <Card style={{ borderRadius: 8, marginTop: 32 }}>
        <div
          style={{ alignItems: 'center', display: 'flex', marginBottom: 16 }}
        >
          <FileTextOutlined
            style={{ color: '#faad14', fontSize: 24, marginRight: 8 }}
          />
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
        onClick={onCertLogin}
        size="large"
        style={{ marginTop: 32 }}
        type="primary"
      >
        证书登录
      </Button>
    </div>
  )

  const tabItems = [
    {
      key: 'account',
      label: '账号密码登录'
    },
    {
      key: 'cert',
      label: '证书登录'
    }
  ]

  const onChange = (key: string) => {
    setActiveKey(key)
  }

  return (
    <div className={classnames(styles.tabContainer)}>
      {tabItems.map((item) => (
        <div
          className={classnames(styles.tabItem, {
            [styles.activeItem]: activeKey === item.key
          })}
          key={item.key}
          onClick={() => onChange(item.key)}
        >
          {item.label}
        </div>
      ))}

      {activeKey === 'account' ? AccountLoginContent : CertLoginContent}
    </div>
  )
}

export default CertLogin
