import { useState } from 'react'
import styles from './index.module.less'
import { Pagination, Spin } from 'antd'
interface Props {
  total: number
  title: string
  items: any[]
  defaultPageSize?: number
  current?: number
  loading?: boolean
  children: (item: any) => React.ReactNode
  onPageChange: (page: number, pageSize: number) => void
}
const PageList = ({
  total,
  title,
  items,
  children,
  onPageChange,
  defaultPageSize = 10,
  current = 1,
  loading = false
}: Props) => {
  const sortTypes = [
    {
      key: 'defaultSort',
      label: '默认排序'
    },
    {
      key: 'createTime',
      label: '发布时间'
    },
    {
      key: 'browseCount',
      label: '浏览量'
    },
  ]
  const [sortKey, setSortKey] = useState<string>('defaultSort')
  const sortClick = (key: string) => {
    setSortKey(key)
  }
  return (
    <div className={styles.pageListContainer}>
      <Spin spinning={loading} tip="Loading...">
        <div className={styles.pageListTop}>
          <div className={styles.pageListTotal}>
            共计
            <span
              style={{
                color: '#E02020',
                fontWeight: 'bold',
                fontSize: '1.15vw',
                padding: '0 0.4vw'
              }}
            >
              {total}
            </span>
            个{title}
          </div>
          <div className={styles.sort}>
            {sortTypes.map((item) => (
              <div className={sortKey === item.key ? styles.sortItemActive : styles.sortItem} key={item.key} onClick={() => sortClick(item.key)}>
                {item.label}
              </div>
            ))}
          </div>
        </div>
        {total === 0 ? (
          <div className={styles.pageListEmpty}>暂无数据</div>
        ) : (
          <div className={styles.pageListContent}>{items.map((item) => children(item))}</div>
        )}
        <div className={styles.pageListFooter}>
          <Pagination
            current={current}
            defaultPageSize={defaultPageSize}
            onChange={onPageChange}
            showSizeChanger
            total={total}
          />
        </div>
      </Spin>
    </div>
  )
}

export default PageList
