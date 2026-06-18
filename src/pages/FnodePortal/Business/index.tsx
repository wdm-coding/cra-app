import SearchBanner from '../component/SearchBanner'
import bannerBg from '@/assets/images/portalImg/business-banner.png'
import SelectType from '../component/SelectType'
import PageList from '../component/PageList'
import EllipsisTooltip from '../component/EllipsisTooltip'
import { useCallback, useEffect, useState } from 'react'
import styles from './index.module.less'
import { getBusinessFunctionType, getBusinessNodeList } from '@/api/function-portal'
import { EyeOutlined, RightOutlined } from '@ant-design/icons'
const FnodePortalBusiness = () => {
  const [dictRefList, setDictRefList] = useState<any[]>([])
  const [current, setCurrent] = useState<number>(1)
  const [total, setTotal] = useState<number>(0)
  const [pageSize, setPageSize] = useState<number>(10)
  const [tableData, setTableData] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [keyword, setKeyword] = useState<{ value: string }>({
    value: ''
  })
  const getList = useCallback(async () => {
    const params: any = {
      pageNum: current,
      pageSize
    }
    if (dictRefList?.length) {
      params.dictRefList = dictRefList
    }
    if (keyword.value) {
      params.keyword = keyword.value
    }
    setLoading(true)
    const { code, data } = await getBusinessNodeList(params)
    if (code === 200) {
      setTableData(data?.result || [])
      setTotal(data?.totalRows || 0)
    }
    setLoading(false)
  }, [dictRefList, current, pageSize, keyword])
  useEffect(() => {
    getList()
  }, [current, pageSize, getList])
  return (
    <div>
      <SearchBanner
        bannerBg={bannerBg}
        countNum={total}
        onClear={() => {
          setKeyword({ value: '' })
        }}
        onSearch={(value) => {
          setKeyword({ value })
          setCurrent(1)
        }}
        title="业务节点"
      />
      <SelectType
        apiFunction={getBusinessFunctionType}
        onChange={(item: any) => {
          if (!item) {
            setDictRefList([])
            setCurrent(1)
            return
          }
          setDictRefList([
            {
              dictRef: item.dictRef,
              value: item.value
            }
          ])
          setCurrent(1)
        }}
      />
      <PageList
        current={current}
        items={tableData}
        loading={loading}
        onPageChange={(page: number, pageSize: number) => {
          setCurrent(page)
          setPageSize(pageSize)
        }}
        title="业务节点"
        total={total}
      >
        {(item) => (
          <div className={styles.pageListItemContent} key={item.id}>
            <div className={styles.titleContent}>
              <img
                alt={item.serviceNodeName}
                src={require('@/assets/images/portalImg/bus-icon.png')}
                style={{
                  width: '3.33vw',
                  height: '3.33vw'
                }}
              />
              <div className={styles.textSty}>
                <EllipsisTooltip
                  style={{
                    fontSize: '1.04vw',
                    color: '#000',
                    fontFamily: 'SHS-M'
                  }}
                  title={item.serviceNodeName}
                />
                <div className={styles.viewCount}>
                  <EyeOutlined />
                  <span style={{ marginLeft: '0.4vw' }}>{item.viewCount}次浏览</span>
                </div>
              </div>
            </div>
            <div className={styles.infoContent}>
              <span>行业分类：</span>
              <span>{item.businessFunctionType || '-'}</span>
            </div>
            <div className={styles.infoContent}>
              <span>登记时间：</span>
              <span>{item.createTime || '-'}</span>
            </div>
            <div className={styles.detailBtn}>
              查看详情
              <RightOutlined />
            </div>
          </div>
        )}
      </PageList>
    </div>
  )
}

export default FnodePortalBusiness
