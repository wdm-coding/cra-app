import { ProForm, ProFormText } from '@ant-design/pro-components'
import { Drawer, Form, InputNumber } from 'antd'
import { addUser, updateUser } from '@/api/express/systemManage/userManage'
interface Props {
  visible: boolean
  type: 'add' | 'edit'
  record?: {
    id: string
    username: string
    age: number
    email: string
    name: string
    phone: string
  }
  onClose: (type?: 'add' | 'edit') => void
}
const UserFormDrawer: React.FC<Props> = ({ visible, type, record, onClose }) => {
  const [form] = Form.useForm()
  const onFinish = async (values: any) => {
    if (type === 'add') {
      const { code }: any = await addUser({
        username: values.username,
        password: values.password,
        age: values.age,
        email: values.email,
        name: values.name,
        phone: values.phone
      })
      if (code === 0) {
        window.$message.success('新增用户成功')
        onClose('add')
      }
    } else {
      const { code }: any = await updateUser({
        id: record?.id!,
        age: values.age,
        email: values.email,
        name: values.name,
        phone: values.phone,
        username: values.username
      })
      if (code === 0) {
        window.$message.success('更新用户成功')
        onClose('edit')
      }
    }
  }
  const onCloseHandler = () => {
    onClose()
  }
  const onAfterOpenChange = (value: boolean) => {
    if (value && type === 'edit' && record) {
      form.setFieldsValue({ ...record })
    }
    if (!value) {
      form.resetFields()
    }
  }
  return (
    <Drawer
      afterOpenChange={onAfterOpenChange}
      closable={{ 'aria-label': 'Close Button' }}
      onClose={onCloseHandler}
      open={visible}
      title={type === 'add' ? '增加用户信息' : '编辑用户信息'}
      width={600}
    >
      <ProForm
        form={form}
        labelCol={{ span: 4 }}
        layout="horizontal"
        name="user"
        onFinish={onFinish}
        wrapperCol={{ span: 20 }}
      >
        <ProFormText
          label="用户姓名"
          name="name"
          new-password
          new-password-name="name"
          rules={[{ message: '请输入用户姓名', required: true }]}
        />
        <ProFormText
          label="手机号"
          name="phone"
          rules={[{ message: '请输入手机号', required: true, pattern: /^1[3456789]\d{9}$/ }]}
        />
        <ProFormText
          label="邮箱"
          name="email"
          rules={[
            {
              message: '请输入邮箱',
              required: true,
              type: 'email'
            }
          ]}
        />
        <Form.Item
          label="年龄"
          name="age"
          rules={[{ message: '请输入年龄', required: true, type: 'number' }]}
        >
          <InputNumber
            max={120}
            min={0}
            placeholder="请输入年龄（0-120岁）"
            style={{ width: '100%' }}
          />
        </Form.Item>
        <ProFormText
          label="账号"
          name="username"
          rules={[{ message: '请输入账号', required: true }]}
        />
        {type === 'add' && (
          <>
            <ProFormText.Password
              label="密码"
              name="password"
              new-password
              rules={[{ message: '请输入密码', required: true, min: 6, max: 12 }]}
            />
            <ProFormText.Password
              label="确认密码"
              name="confirmPassword"
              rules={[
                { message: '请输入确认密码', required: true, min: 6, max: 12 },
                () => ({
                  validator(rule, value) {
                    if (value !== form.getFieldValue('password')) {
                      return Promise.reject('两次输入密码不一致')
                    } else {
                      return Promise.resolve()
                    }
                  }
                })
              ]}
            />
          </>
        )}
      </ProForm>
    </Drawer>
  )
}

export default UserFormDrawer
