import styles from './index.less'
import { getIsLogin } from '@/store/modules/userStore'
import { useSelector } from 'react-redux'
const Home: React.FC = () => {
  const isLogin = useSelector(getIsLogin)
  return (
    <div className={styles.homeWrap}>
      <img
        alt="banner01"
        src={require('@/assets/images/banner01.png')}
        style={{ width: '100%', height: '650px', objectFit: 'cover' }}
      />
    </div>
  )
}

export default Home
