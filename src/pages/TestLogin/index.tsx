import { Form, Input, Checkbox, Button } from 'antd'
import { Layers, User, Lock, Eye, EyeOff } from 'lucide-react'
import styles from './index.less'

const TestLogin = () => {
  const [form] = Form.useForm()

  const onFinish = (values: { username: string; password: string; remember?: boolean }) => {
    if (values.username && values.password) {
      // onLogin();
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Logo 区域 */}
        <div className={styles.logoSection}>
          <div className={styles.logoIcon}>
            <Layers />
          </div>
          <h1 className={styles.title}>矩屋后台管理系统</h1>
          <p className={styles.subtitle}>欢迎登录，开启高效管理之旅</p>
        </div>

        {/* 登录表单 */}
        <div className={styles.card}>
          <Form
            className={styles.form}
            form={form}
            layout="vertical"
            onFinish={onFinish}
            size="large"
          >
            {/* 用户名输入 */}
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input
                placeholder="请输入用户名"
                prefix={<User className={styles.inputIcon} />}
              />
            </Form.Item>

            {/* 密码输入 */}
            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password
                iconRender={(visible) =>
                  visible ? (
                    <EyeOff className={styles.suffixIcon} />
                  ) : (
                    <Eye className={styles.suffixIcon} />
                  )
                }
                placeholder="请输入密码"
                prefix={<Lock className={styles.inputIcon} />}
              />
            </Form.Item>

            {/* 记住我和忘记密码 */}
            <Form.Item className={styles.optionsItem}>
              <div className={styles.optionsRow}>
                <Checkbox name="remember">记住我</Checkbox>
                <span className={styles.forgotLink}>忘记密码?</span>
              </div>
            </Form.Item>

            {/* 登录按钮 */}
            <Form.Item className={styles.submitItem}>
              <Button block htmlType="submit" type="primary">
                登录
              </Button>
            </Form.Item>
          </Form>

          {/* 提示信息 */}
          <div className={styles.tipSection}>
            <p className={styles.tipText}>
              没有账号？
              <span className={styles.contactLink}>联系管理员</span>
            </p>
          </div>
        </div>

        {/* 底部版权信息 */}
        <div className={styles.footer}>
          <p>© 2026 矩屋科技 保留所有权利</p>
        </div>
      </div>
    </div>
  )
}

export default TestLogin
