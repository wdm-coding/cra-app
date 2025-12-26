import { Button } from 'antd'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { userLogin } from '@/store/modules/userStore'
const Login = () => {
  const dispatch = useDispatch<any>()
  const navigate = useNavigate()
  const onLogin = async () => {
    try {
      const result: any = await dispatch(userLogin()).unwrap()
      result && navigate('/', { replace: true })
    } catch (error) {
      const { message } = error as any
      console.log('登录失败message', message)
    }
  }
  return (
    <div>
      登录页
      <Button onClick={onLogin} type="primary">
        登录
      </Button>
    </div>
  )
}
export default Login
