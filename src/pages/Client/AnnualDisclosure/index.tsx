import headerBg from '@/assets/images/banner01.png'
import { Input, Tabs, TabsProps } from 'antd'
import { useState } from 'react'
import styles from './index.less'
import ListComp from './ListComp'
const { Search } = Input
const AnnualDisclosure: React.FC = () => {
  const [keyword, setKeyword] = useState<string>('')
  const [orgName, setOrgName] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [activeKey, setActiveKey] = useState<string>('imp')
  const onSearch = (value: string) => {
    setOrgName(value)
  }
  const onChange = (key: string) => {
    setKeyword('')
    setOrgName('')
    setActiveKey(key)
  }

  const items: TabsProps['items'] = [
    {
      key: 'imp',
      label: '实施机构'
    },
    {
      key: 'opt',
      label: '运营机构'
    }
  ]
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img alt="" className={styles.headerBg} src={headerBg} />
        <div className={styles.topWrap}>
          <div className={styles.title}>2025年授权运营信息披露</div>
          <div className={styles.searchBox}>
            <Search
              allowClear={true}
              enterButton="搜索机构"
              loading={loading}
              onChange={(e) => setKeyword(e.target.value)}
              onSearch={onSearch}
              placeholder={`请输入${activeKey === 'imp' ? '实施' : '运营'}机构名称`}
              value={keyword}
            />
          </div>
        </div>
      </div>
      <div className={styles.mainpage}>
        <Tabs
          defaultActiveKey="imp"
          items={items}
          onChange={onChange}
          size="large"
          tabBarStyle={{
            fontWeight: 500
          }}
        />
        <ListComp
          ActiveKey={activeKey}
          onSetLoading={setLoading}
          orgName={orgName}
        />
      </div>
    </div>
  )
}

export default AnnualDisclosure
