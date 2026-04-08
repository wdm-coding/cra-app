import { Button, Input, Typography } from 'antd'
import { useNavigate, useLocation } from 'react-router'
import { useDispatch } from 'react-redux'
import { userLogin } from '@/store/modules/userStore'
import { useState } from 'react'
const { Title, Text } = Typography
const AccbLogin: React.FC = () => {
  const [accb, setAccb] = useState<string>('')
  const [isShowError, setIsShowError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useDispatch<any>()
  const navigate = useNavigate()
  const state = useLocation().state
  const onChange = (e: any) => {
    if (e.target.value) {
      setIsShowError(false)
    }
    setAccb(e.target.value)
  }
  const onLogin = async () => {
    if (!accb) return setIsShowError(true)
    setLoading(true)
    try {
      const result: any = await dispatch(userLogin({ type: 'accb', loginParams: { accb } })).unwrap()
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
      <Title level={3}>accb登录</Title>
      <Text type="secondary">请输入accb-cookier完成登录</Text>
      <div className="flex items-center" style={{ position: 'relative', marginTop: 24 }}>
        <Input onChange={onChange} placeholder="输入accb登录" value={accb} />
        {isShowError && (
          <div style={{ position: 'absolute', left: 0, top: 35 }}>
            <span style={{ fontSize: 14, color: 'red' }}>请输入accb进行登录</span>
          </div>
        )}
      </div>
      <Button loading={loading} onClick={onLogin} style={{ width: '100%', marginTop: 54 }} type="primary">
        登录
      </Button>
    </div>
  )
}
export default AccbLogin
