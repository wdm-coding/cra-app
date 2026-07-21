import SearchBanner from '../component/SearchBanner'
import productBanner from '@/assets/images/portalImg/banner-product.png'
import SelectType from '../component/SelectType'
import PageList from '../component/PageList'
import EllipsisTooltip from '../component/EllipsisTooltip'
import { useCallback, useEffect, useState } from 'react'
import styles from './index.module.less'
import { getProductType, getProductList } from '@/api/function-portal'
import { EyeOutlined, RightOutlined } from '@ant-design/icons'
import { trackSearchHandler } from '@/utils/matomo'
const Product = () => {
  const [dictRefList, setDictRefList] = useState<any[]>([])
  const [current, setCurrent] = useState<number>(1)
  const [total, setTotal] = useState<number>(0)
  const [totalCount, setTotalCount] = useState<number>(0)
  const [pageSize, setPageSize] = useState<number>(10)
  const [tableData, setTableData] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [keyword, setKeyword] = useState<{ value: string }>({
    value: ''
  })
  const [sortParams, setSortParams] = useState<any>({})
  const getList = useCallback(async () => {
    const params: any = {
      pageNum: current,
      pageSize
    }
    if (dictRefList?.length) {
      params.dictRefList = dictRefList
    }
    if (keyword.value) {
      params.productName = keyword.value
    }
    if(sortParams){
      params.orderName = sortParams.orderName
      params.orderSort = sortParams.orderSort
    }
    setLoading(true)
    const { code, data } = await getProductList(params)
    if (code === 200) {
      trackSearchHandler(params, 'data-product', data?.totalRows || 0)
      setTableData(data?.result || [])
      setTotal(data?.totalRows || 0)
    }
    setLoading(false)
  }, [dictRefList, current, pageSize, keyword, sortParams])

  const fetchTotalCount = useCallback(async () => {
    const { code, data } = await getProductList({ pageNum: 1, pageSize: 1 })
    if (code === 200) {
      setTotalCount(data?.totalRows || 0)
    }
  }, [])

  useEffect(() => {
    fetchTotalCount()
  }, [fetchTotalCount])

  useEffect(() => {
    getList()
  }, [current, pageSize, getList])
  return (
    <div>
      <SearchBanner
        bannerBg={productBanner}
        countNum={totalCount}
        onClear={() => {
          setKeyword({ value: '' })
        }}
        onSearch={(value) => {
          setKeyword({ value })
          setCurrent(1)
        }}
        title="数据产品"
      />
      <SelectType
        apiFunction={getProductType}
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
        hasSort={true}
        items={tableData}
        loading={loading}
        onPageChange={(page: number, pageSize: number) => {
          setCurrent(page)
          setPageSize(pageSize)
        }}
        onSortChange={(params)=>{
          setSortParams(params)
        }}
        title="数据产品"
        total={total}
      >
        {(item) => (
          <div className={styles.pageListItemContent} key={item.id}>
            <div className={styles.titleContent}>
              <img
                alt={item.name}
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
                  title={item.name}
                />
                <div className={styles.viewCount}>
                  <EyeOutlined />
                  <span style={{ marginLeft: '0.4vw' }}>
                    {item?.productStatisticsVO?.viewCount || 0}次浏览
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.description}>
              {item?.description || '-'}
            </div>
            <div className={styles.infoContent}>
              <span>产品类型：</span>
              <span>{item?.productType || '-'}</span>
            </div>
            <div className={styles.infoContent}>
              <span>登记时间：</span>
              <span>{item?.registerTime || '-'}</span>
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

export default Product
