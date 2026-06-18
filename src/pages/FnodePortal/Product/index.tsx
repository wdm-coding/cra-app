import SearchBanner from '../component/SearchBanner'
import productBanner from '@/assets/images/portalImg/banner-product.png'
import SelectType from '../component/SelectType'
import PageList from '../component/PageList'
import { useCallback, useEffect, useState } from 'react'
import styles from './index.module.less'
import {getProductType} from '@/api/function-portal'
const Product = () => {
  const [dictRefList, setDictRefList] = useState<any[]>([])
  const [current, setCurrent] = useState<number>(1)
  const [total, setTotal] = useState<number>(0)
  const [pageSize, setPageSize] = useState<number>(10)
  const [tableData, setTableData] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const getList = useCallback(async () => {
    setLoading(true)  
    const params:any = {
      pageNum: current,
      pageSize
    }
    if(dictRefList?.length){
      params.dictRefList = dictRefList
    }
    console.log('params', params)
    setTimeout(() => {
      setLoading(false)
      setTableData([
        {
          key: 'all',
          label: '不限',
          count: 25152
        },
        {
          key: 'imp',
          label: '实施机构',
          count: 25152
        },
        {
          key: 'opt',
          label: '运营机构',
          count: 25152
        },
        {
          key: 'opt1',
          label: '运营机构1',
          count: 25152
        }
      ])
      setTotal(25152)
    }, 1000)
  }, [dictRefList, current, pageSize])
  useEffect(() => {
    getList()
  }, [current, pageSize, getList])
  return (
    <div>
      <SearchBanner
        bannerBg={productBanner}
        countNum={25152}
        onClear={() => {
          console.log('数据产品-清除')
        }}
        onSearch={(value) => {
          console.log('数据产品-搜索', value)
        }}
        title="数据产品"
      />
      <SelectType
        apiFunction={getProductType}
        onChange={(item:any) => {
          if(!item){
            setDictRefList([])
            setCurrent(1)
            return
          }
          setDictRefList([item.dictRef, item.value])
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
        title="数据产品"
        total={total}
      >
        {(item) => (
          <div className={styles.pageListItemContent} key={item.key}>
            <div>{item.label}</div>
            <div>{item.count}</div>
          </div>
        )}
      </PageList>
    </div>
  )
}

export default Product
