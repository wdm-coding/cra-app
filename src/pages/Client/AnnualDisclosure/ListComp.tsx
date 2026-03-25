import { Button, Descriptions, List } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import styles from './index.less'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
interface ListCompProps {
  ActiveKey: string
  orgName: string
  onSetLoading: (loading: boolean) => void
}
interface ListItem {
  orgName: string
  email: string
  address: string
}
const pageSize = 10
const mockApi = () => {
  // 延时
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      resolve([])
    }, 1000)
  })
}
const ListComp: React.FC<ListCompProps> = ({
  ActiveKey,
  orgName,
  onSetLoading
}) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)
  const [current, setCurrent] = useState<number>(1)
  const [dataSource, setDataSource] = useState<ListItem[]>([])
  const changeData = useCallback(async () => {
    onSetLoading(true)
    setLoading(true)
    await mockApi()
    onSetLoading(false)
    setLoading(false)
    if (ActiveKey === 'imp') {
      // 实施机构
      const impList = [
        {
          orgName: '实施机构1',
          email: 'bank@bank.com.cn',
          address: '北京市海淀区'
        },
        {
          orgName: '实施机构2',
          email: 'cc@cc.com.cn',
          address: '北京市海淀区'
        },
        {
          orgName: '实施机构3',
          email: 'cc@cc.com.cn',
          address: '北京市海淀区'
        },
        {
          orgName: '实施机构4',
          email: 'cc@cc.com.cn',
          address: '北京市海淀区'
        }
      ]
      setDataSource(impList.filter((item) => item.orgName.includes(orgName)))
    }
    if (ActiveKey === 'opt') {
      // 运营机构
      const optList = [
        {
          orgName: '运营机构1',
          email: 'cc@cc.com.cn',
          address: '北京市海淀区'
        },
        {
          orgName: '运营机构2',
          email: 'cc@cc.com.cn',
          address: '北京市海淀区'
        }
      ]
      setDataSource(optList.filter((item) => item.orgName.includes(orgName)))
    }
  }, [ActiveKey, orgName, onSetLoading])
  useEffect(() => {
    setDataSource([])
    changeData()
  }, [changeData])
  return (
    <div>
      <List<ListItem>
        dataSource={dataSource}
        loading={loading}
        pagination={{
          position: 'bottom',
          align: 'end',
          total: dataSource.length,
          pageSize: pageSize,
          current: current,
          onChange: (page) => {
            setCurrent(page)
          }
        }}
        renderItem={(item) => (
          <List.Item>
            <div className={styles.listItem}>
              <div className={styles.orgName}>{item.orgName}</div>
              <Descriptions column={1}>
                <Descriptions.Item label="邮箱">{item.email}</Descriptions.Item>
                <Descriptions.Item label="地址">
                  <span>{item.address}</span>
                  <div style={{ marginLeft: 'auto' }}>
                    <Button
                      icon={<ArrowRightOutlined />}
                      iconPosition="end"
                      onClick={() => {
                        navigate('/client/annualDisclosure/detail', {
                          state: {
                            activeKey: ActiveKey
                          }
                        })
                      }}
                      size="small"
                      style={{ marginLeft: 'auto' }}
                      type="link"
                    >
                      查看详情
                    </Button>
                  </div>
                </Descriptions.Item>
              </Descriptions>
            </div>
          </List.Item>
        )}
      />
    </div>
  )
}

export default ListComp
