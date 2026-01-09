import { Button, Input, message as messageApi, Skeleton } from 'antd'
import { useNavigate, useLocation } from 'react-router'
import { useDispatch } from 'react-redux'
import { userLogin } from '@/store/modules/userStore'
import styles from './index.less'
import { useEffect, useState } from 'react'
const Login = () => {
  const [skeLoading, setSkeLoading] = useState<boolean>(false)
  const [messageIns, contextHolder] = messageApi.useMessage()
  const [isShowError, setIsShowError] = useState<boolean>(false)
  const { state } = useLocation()
  const dispatch = useDispatch<any>()
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const onLogin = async () => {
    if (!accb) return setIsShowError(true)
    setLoading(true)
    try {
      const result: any = await dispatch(userLogin(accb)).unwrap()
      setLoading(false)
      result && navigate(state?.from || '/', { replace: true })
    } catch (error) {
      setLoading(false)
      const { message } = error as any
      throw new Error(message)
    }
  }
  const [accb, setAccb] = useState<string>('')
  const onChange = (e: any) => {
    if (e.target.value) {
      setIsShowError(false)
    }
    setAccb(e.target.value)
  }
  useEffect(() => {
    setSkeLoading(true)
    const timer = setTimeout(() => {
      setSkeLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [setSkeLoading])
  return (
    <div className={styles.loginWrap}>
      {contextHolder}
      <div className={styles.loginBox}>
        <Skeleton
          active
          loading={skeLoading}
          paragraph={{
            rows: 1
          }}
        >
          <div className="flex items-center" style={{ position: 'relative' }}>
            <span style={{ fontSize: 16, marginRight: 15 }}>accb:</span>
            <Input
              onChange={onChange}
              placeholder="输入accb登录"
              value={accb}
            />
            {isShowError && (
              <div style={{ position: 'absolute', left: 55, top: 35 }}>
                <span style={{ fontSize: 14, color: 'red' }}>
                  请输入accb进行登录
                </span>
              </div>
            )}
            <Button
              loading={loading}
              onClick={onLogin}
              style={{ marginLeft: 15 }}
              type="primary"
            >
              登录
            </Button>
          </div>
        </Skeleton>
      </div>
    </div>
  )
}
export default Login
