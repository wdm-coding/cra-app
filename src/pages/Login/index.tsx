import { Skeleton } from 'antd'
import { useEffect, useState } from 'react'
import classnames from 'classnames'
import styles from './index.less'
import AccountLogin from './modules/AccountLogin'
import AccbLogin from './modules/AccbLogin'
import CertLogin from './modules/CertLogin'
const Login = () => {
  const [skeLoading, setSkeLoading] = useState<boolean>(false)
  useEffect(() => {
    setSkeLoading(true)
    const timer = setTimeout(() => {
      setSkeLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [setSkeLoading])
  const [activeKey, setActiveKey] = useState<'accb' | 'password' | 'cert'>('accb')
  const tabItems: any[] = [
    {
      key: 'accb',
      label: 'accb登录',
      component: AccbLogin
    },
    {
      key: 'account',
      label: '账号登录',
      component: AccountLogin
    },
    {
      key: 'cert',
      label: '证书登录',
      component: CertLogin
    }
  ]
  const onTabChange = (key: any) => {
    setActiveKey(key)
  }
  return (
    <div className={styles.loginWrap}>
      <div className={styles.loginBox}>
        <Skeleton active loading={skeLoading}>
          <div className={styles.loginTabs}>
            {tabItems.map((item) => (
              <div
                className={classnames(styles.tabItem, {
                  [styles.tabItemActive]: activeKey === item.key
                })}
                key={item.key}
                onClick={() => onTabChange(item.key)}
              >
                {item.label}
              </div>
            ))}
          </div>
          <div className={styles.loginMain}>
            {(() => {
              const Component = tabItems.find((item) => item.key === activeKey)?.component
              return Component ? <Component /> : null
            })()}
          </div>
        </Skeleton>
      </div>
    </div>
  )
}
export default Login
