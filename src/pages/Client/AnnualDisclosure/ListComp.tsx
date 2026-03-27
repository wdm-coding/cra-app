import { Button, Descriptions, List } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import styles from './index.less'
import { use, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { getAnnualDisclosureList } from '@/api/annualDisclosure'
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
interface SearchParams {
  pageSize: number
  pageNum: number
  type: 1 | 2
  orgName?: string
}
const ListComp: React.FC<ListCompProps> = ({
  ActiveKey,
  orgName,
  onSetLoading
}) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)
  const [total, setTotal] = useState<number>(0)
  const [current, setCurrent] = useState<number>(1)
  const [dataSource, setDataSource] = useState<ListItem[]>([])
  const getList = useCallback(
    async (pageNum: number = 1, type: 1 | 2 = 1, orgName?: string) => {
      const params: SearchParams = {
        pageSize: 10,
        pageNum,
        type,
        orgName
      }
      if (!orgName) {
        delete params.orgName
      }
      console.log('getList', params)
      try {
        setLoading(true)
        onSetLoading(true)
        const res: any = await getAnnualDisclosureList(params)
        if (res && res.list) {
          setDataSource(res.list)
          setTotal(res.total)
          setCurrent(pageNum)
        }
      } catch (error) {
      } finally {
        setLoading(false)
        onSetLoading(false)
      }
    },
    [onSetLoading]
  )
  useEffect(() => {
    getList(1, ActiveKey === 'imp' ? 1 : 2, orgName)
  }, [ActiveKey, orgName, getList])
  return (
    <div>
      <List<ListItem>
        dataSource={dataSource}
        loading={loading}
        pagination={{
          position: 'bottom',
          align: 'end',
          total: total,
          pageSize: 10,
          current: current,
          onChange: (page) => {
            getList(page, ActiveKey === 'imp' ? 1 : 2, orgName)
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
