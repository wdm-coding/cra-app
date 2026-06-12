import { useMemo, useState } from 'react'
import styles from './index.module.less'
import { Input } from 'antd'
interface Props {
  bannerBg: string
  title: string
  countNum: number,
  onClear: () => void
  onSearch: (value: string) => void
}
const SearchBanner: React.FC<Props> = ({ bannerBg, title, countNum, onClear, onSearch }) => {
  const [searchValue, setSearchValue] = useState('')
  const letterList = useMemo(() => {
    return countNum.toString().split('')
  }, [countNum])
  const handleSearch = () => {
    onSearch(searchValue)
  }
  const handleClear = () => {
    onClear()
  }
  return (
    <div className={styles.searchBanner} style={{ backgroundImage: `url(${bannerBg})` }}>
      <div className={styles.title}>{title}</div>
      <div className={styles.count}>
        平台共有
        <div className={styles.countNum}>
          {letterList.map((item, index) => (
            <div className={styles.countNumItem} key={index}>
              <div className={styles.countNumInnerItem}>
                <div className={styles.countNumInnerItemValue}>{item}</div>
                <div className={styles.countNumInnerItemBottom} />
              </div>
            </div>
          ))}
        </div>
        个{title}
      </div>
      <div className={styles.searchContainer}>
        <div className={styles.searchInput}>
          <Input
            allowClear
            onChange={(e) => {
              if(e.target.value) {
                setSearchValue(e.target.value)
              }else{
                setSearchValue('')
                handleClear()
              }
            }}
            onPressEnter={handleSearch}
            placeholder="请输入搜索内容"
            style={{ width: '100%', height: '100%', border: 'none' }}
            value={searchValue}
          />
        </div>
        <div className={styles.searchButton} onClick={handleSearch}>搜索</div>
      </div>
    </div>
  )
}
export default SearchBanner
