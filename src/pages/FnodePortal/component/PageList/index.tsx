import { useState } from 'react'
import styles from './index.module.less'
import { Pagination, Spin } from 'antd'
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons'
interface Props {
  total: number
  title: string
  items: any[]
  defaultPageSize?: number
  current?: number
  loading?: boolean
  children: (item: any) => React.ReactNode
  onPageChange: (page: number, pageSize: number) => void
  onSortChange?: (params: any) => void
  hasSort?: boolean
}
const PageList = ({
  total,
  title,
  items,
  children,
  onPageChange,
  defaultPageSize = 10,
  current = 1,
  loading = false,
  hasSort = false,
  onSortChange
}: Props) => {
  const sortTypes = [
    {
      key: 'defaultSort',
      label: '默认排序'
    },
    {
      key: 'updateTime',
      label: '发布时间'
    },
    {
      key: 'viewCount',
      label: '浏览量'
    }
  ]
  const [sortKey, setSortKey] = useState<{
    orderName: string
    orderSort: 'asc' | 'desc'
  }>({
    orderName: 'defaultSort',
    orderSort: 'asc'
  })
  const sortClick = (key: string) => {
    const params: any = {}
    if (key === 'defaultSort') {
      if (sortKey.orderName === 'defaultSort') {
        setSortKey({
          orderName: '',
          orderSort: 'asc'
        })
      } else {
        setSortKey({
          orderName: 'defaultSort',
          orderSort: 'asc'
        })
      }
    } else {
      if (sortKey.orderSort === 'asc') {
        setSortKey({
          orderName: key,
          orderSort: 'desc'
        })
        params.orderName = key
        params.orderSort = 'desc'
      } else {
        setSortKey({
          orderName: key,
          orderSort: 'asc'
        })
        params.orderName = key
        params.orderSort = 'asc'
      }
    }
    onSortChange?.(params)
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
          {hasSort && (
            <div className={styles.sort}>
              {sortTypes.map((item) =>
                item.key === 'defaultSort' ? (
                  <div
                    className={
                      sortKey.orderName === item.key ? styles.sortItemActive : styles.sortItem
                    }
                    key={item.key}
                    onClick={() => sortClick(item.key)}
                  >
                    {item.label}
                  </div>
                ) : (
                  <div
                    className={styles.sortItem}
                    key={item.key}
                    onClick={() => sortClick(item.key)}
                  >
                    <span
                      style={{
                        color: sortKey.orderName === item.key ? '#006BD3' : '#666666'
                      }}
                    >
                      {item.label}
                    </span>
                    <div className={styles.sortIconContainer}>
                      <div
                        className={styles.sortIcon}
                        style={{
                          color:
                            sortKey.orderName === item.key && sortKey.orderSort === 'desc'
                              ? '#006BD3'
                              : '#666666'
                        }}
                      >
                        <CaretDownOutlined />
                      </div>
                      <div
                        className={styles.sortIcon}
                        style={{
                          color:
                            sortKey.orderName === item.key && sortKey.orderSort === 'asc'
                              ? '#006BD3'
                              : '#666666'
                        }}
                      >
                        <CaretUpOutlined />
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
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
