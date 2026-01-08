import { ProForm, ProFormInstance, ProFormText } from '@ant-design/pro-form'
import { User, addUser, updateUser } from '@/api/user'
import { useCallback, useEffect, useRef } from 'react'
import { message } from 'antd'
interface Props {
  rowData?: User | null
  open: boolean
  onSuccess: (msg: string) => void
}
const UpdateForm: React.FC<Props> = ({ open, rowData, onSuccess }) => {
  const formRef = useRef<ProFormInstance>(null)
  useEffect(() => {
    if (open && rowData) {
      formRef.current?.setFieldsValue(rowData)
    } else {
      formRef.current?.resetFields()
    }
  }, [open, rowData])
  const onFinish = useCallback(
    async (value: User) => {
      if (rowData?.id) {
        const { code, data } = await updateUser({ id: rowData?.id, ...value })
        if (code === 0 && data !== null) {
          onSuccess('更新成功')
        }
      }
      const { code, data } = await addUser({ ...value })
      if (code === 0 && data !== null) {
        onSuccess('新增成功')
      }
    },
    [onSuccess, rowData?.id]
  )
  return (
    <ProForm<User>
      formRef={formRef}
      labelCol={{
        span: 6
      }}
      layout="horizontal"
      onFinish={onFinish}
      submitter={{
        searchConfig: {
          resetText: '重置',
          submitText: '提交'
        },
        submitButtonProps: {
          style: {
            marginLeft: 15
          }
        },
        render: (props, dom) => [
          <div key="submit" style={{ textAlign: 'right' }}>
            {dom}
          </div>
        ]
      }}
    >
      <ProFormText
        label="负责人姓名"
        name="name"
        placeholder="请输入负责人姓名"
        rules={[{ required: true, message: '请输入负责人姓名' }]}
      />
      <ProFormText
        label="账号名称"
        name="username"
        placeholder="请输入账号名称"
        rules={[{ required: true, message: '请输入账号名称' }]}
      />
      <ProFormText
        label="身份证号"
        name="idCard"
        placeholder="请输入身份证号"
        rules={[
          { required: true, message: '请输入身份证号' },
          {
            pattern: /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20| 30| 31)(\d{3})(\d|X|x)$/,
            message: '请输入正确的身份证号'
          }
        ]}
      />
      <ProFormText
        label="手机号"
        name="phone"
        placeholder="请输入手机号"
        rules={[
          { required: true, message: '请输入手机号' },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: '请输入正确的手机号'
          }
        ]}
      />
      <ProFormText
        label="邮箱"
        name="email"
        placeholder="请输入邮箱"
        rules={[
          { required: true, message: '请输入邮箱' },
          {
            pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
            message: '请输入正确的邮箱'
          }
        ]}
      />
    </ProForm>
  )
}

export default UpdateForm
